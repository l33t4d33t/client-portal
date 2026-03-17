export interface ClientFile {
  id: string
  name: string
  size: string
  type: 'pdf' | 'image' | 'video' | 'document' | 'archive'
  uploadedAt: string
  category: 'Firmware' | 'Manual' | 'Schematic' | 'Calibration' | 'Compliance' | 'Warranty' | 'Uploads'
  deviceId: string
  version?: string
  expiresAt?: string
}

export interface Device {
  id: string
  name: string
  model: string
  serialNumber: string
}

export interface Client {
  id: string
  name: string
  email: string
  password: string
  company: string
  avatarInitials: string
  devices: Device[]
  files: ClientFile[]
}

export type AuthUser =
  | { role: 'admin' }
  | { role: 'client'; clientId: string }
