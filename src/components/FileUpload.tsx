import { useState, useRef, DragEvent, ChangeEvent } from 'react'
import { ClientFile } from '../types'

interface FileUploadProps {
  onFilesAdded: (files: ClientFile[]) => void
}

const EXTENSION_TYPE_MAP: Record<string, ClientFile['type']> = {
  pdf: 'pdf',
  jpg: 'image', jpeg: 'image', png: 'image', gif: 'image', webp: 'image',
  mp4: 'video', mov: 'video', avi: 'video', mkv: 'video',
  zip: 'archive', rar: 'archive', tar: 'archive', gz: 'archive',
  doc: 'document', docx: 'document', txt: 'document', xls: 'document', xlsx: 'document',
}

function getFileType(filename: string): ClientFile['type'] {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  return EXTENSION_TYPE_MAP[ext] ?? 'document'
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function FileUpload({ onFilesAdded }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function processFiles(fileList: FileList) {
    const newFiles: ClientFile[] = Array.from(fileList).map((file) => ({
      id: `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: file.name,
      size: formatBytes(file.size),
      type: getFileType(file.name),
      uploadedAt: new Date().toISOString().split('T')[0],
      category: 'Uploads' as const,
    }))
    onFilesAdded(newFiles)
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files.length) processFiles(e.dataTransfer.files)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) processFiles(e.target.files)
    e.target.value = ''
  }

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`border-2 border-dashed rounded-2xl px-6 py-10 text-center cursor-pointer transition mb-6 ${
        isDragging
          ? 'border-brand-500 bg-brand-50'
          : 'border-gray-200 bg-white hover:border-brand-400 hover:bg-gray-50'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleChange}
      />
      <div className="flex flex-col items-center gap-2 pointer-events-none">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDragging ? 'bg-brand-100' : 'bg-gray-100'}`}>
          <svg className={`w-6 h-6 ${isDragging ? 'text-brand-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-700">
          {isDragging ? 'Drop files here' : 'Drag & drop files or click to browse'}
        </p>
        <p className="text-xs text-gray-400">Supports any file type</p>
      </div>
    </div>
  )
}
