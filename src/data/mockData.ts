import { Client } from '../types'

export const COMPANY_NAME = 'Multiplex Beverage'
export const SUPPORT_EMAIL = 'support@multiplexbeverage.com'
export const SUPPORT_PHONE = '+1 (800) 555-0192'

export const ADMIN_CREDENTIALS = {
  email: 'admin@multiplexbeverage.com',
  password: 'admin1234',
}

export const MOCK_CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah@acmecorp.com',
    password: 'sarah1234',
    company: 'Acme Corp',
    avatarInitials: 'SM',
    devices: [
      { id: 'd1', name: 'X-200 Controller', model: 'X-200', serialNumber: 'AX-001234' },
      { id: 'd2', name: 'Pressure Sensor Array', model: 'PSA-400', serialNumber: 'PS-005678' },
    ],
    files: [
      { id: 'f1', name: 'X200_Firmware_Update.bin', size: '3.2 MB', type: 'document', uploadedAt: '2026-03-15', category: 'Firmware', deviceId: 'd1', version: 'v3.4.1' },
      { id: 'f2', name: 'X200_User_Manual.pdf', size: '8.7 MB', type: 'pdf', uploadedAt: '2026-03-10', category: 'Manual', deviceId: 'd1', version: 'v2.1' },
      { id: 'f3', name: 'X200_Wiring_Schematic.pdf', size: '4.1 MB', type: 'pdf', uploadedAt: '2026-02-20', category: 'Schematic', deviceId: 'd1' },
      { id: 'f4', name: 'X200_Calibration_Report.pdf', size: '1.2 MB', type: 'pdf', uploadedAt: '2026-01-15', category: 'Calibration', deviceId: 'd1', expiresAt: '2026-04-01' },
      { id: 'f5', name: 'X200_CE_Certificate.pdf', size: '512 KB', type: 'pdf', uploadedAt: '2025-06-01', category: 'Compliance', deviceId: 'd1', expiresAt: '2026-06-01' },
      { id: 'f6', name: 'PSA400_User_Manual.pdf', size: '5.3 MB', type: 'pdf', uploadedAt: '2026-03-14', category: 'Manual', deviceId: 'd2', version: 'v1.3' },
      { id: 'f7', name: 'PSA400_Calibration_Report.pdf', size: '980 KB', type: 'pdf', uploadedAt: '2026-02-01', category: 'Calibration', deviceId: 'd2', expiresAt: '2026-08-01' },
      { id: 'f8', name: 'PSA400_Warranty_Card.pdf', size: '220 KB', type: 'pdf', uploadedAt: '2025-12-10', category: 'Warranty', deviceId: 'd2' },
    ],
  },
  {
    id: '2',
    name: 'James Thornton',
    email: 'james@novastudio.io',
    password: 'james1234',
    company: 'Nova Studio',
    avatarInitials: 'JT',
    devices: [
      { id: 'd3', name: 'T-100 Data Logger', model: 'T-100', serialNumber: 'TL-009012' },
    ],
    files: [
      { id: 'f9',  name: 'T100_Firmware_v2.bin', size: '1.8 MB', type: 'document', uploadedAt: '2026-03-16', category: 'Firmware', deviceId: 'd3', version: 'v2.0.0' },
      { id: 'f10', name: 'T100_User_Manual.pdf', size: '6.4 MB', type: 'pdf', uploadedAt: '2026-03-01', category: 'Manual', deviceId: 'd3', version: 'v2.0' },
      { id: 'f11', name: 'T100_Circuit_Schematic.pdf', size: '3.9 MB', type: 'pdf', uploadedAt: '2026-01-10', category: 'Schematic', deviceId: 'd3' },
      { id: 'f12', name: 'T100_Calibration_Report.pdf', size: '760 KB', type: 'pdf', uploadedAt: '2026-02-15', category: 'Calibration', deviceId: 'd3', expiresAt: '2026-08-15' },
      { id: 'f13', name: 'T100_FCC_Certificate.pdf', size: '430 KB', type: 'pdf', uploadedAt: '2025-09-01', category: 'Compliance', deviceId: 'd3', expiresAt: '2026-09-01' },
      { id: 'f14', name: 'T100_Warranty_Card.pdf', size: '190 KB', type: 'pdf', uploadedAt: '2025-11-20', category: 'Warranty', deviceId: 'd3' },
    ],
  },
  {
    id: '3',
    name: 'Priya Desai',
    email: 'priya@greenleaf.co',
    password: 'priya1234',
    company: 'Greenleaf Co',
    avatarInitials: 'PD',
    devices: [
      { id: 'd4', name: 'E-300 Environmental Monitor', model: 'E-300', serialNumber: 'EM-003456' },
      { id: 'd5', name: 'Flow Meter Unit', model: 'FM-150', serialNumber: 'FM-007890' },
    ],
    files: [
      { id: 'f15', name: 'E300_Firmware_Latest.bin', size: '2.6 MB', type: 'document', uploadedAt: '2026-03-17', category: 'Firmware', deviceId: 'd4', version: 'v4.1.2' },
      { id: 'f16', name: 'E300_User_Manual.pdf', size: '9.1 MB', type: 'pdf', uploadedAt: '2026-03-17', category: 'Manual', deviceId: 'd4', version: 'v4.0' },
      { id: 'f17', name: 'E300_Wiring_Diagram.pdf', size: '2.8 MB', type: 'pdf', uploadedAt: '2026-02-05', category: 'Schematic', deviceId: 'd4' },
      { id: 'f18', name: 'E300_Calibration_Report.pdf', size: '1.1 MB', type: 'pdf', uploadedAt: '2026-01-20', category: 'Calibration', deviceId: 'd4', expiresAt: '2026-04-10' },
      { id: 'f19', name: 'E300_ISO_Certificate.pdf', size: '670 KB', type: 'pdf', uploadedAt: '2025-07-15', category: 'Compliance', deviceId: 'd4', expiresAt: '2026-07-15' },
      { id: 'f20', name: 'FM150_User_Manual.pdf', size: '4.5 MB', type: 'pdf', uploadedAt: '2026-02-28', category: 'Manual', deviceId: 'd5', version: 'v1.1' },
      { id: 'f21', name: 'FM150_Calibration_Report.pdf', size: '890 KB', type: 'pdf', uploadedAt: '2026-02-10', category: 'Calibration', deviceId: 'd5', expiresAt: '2026-08-10' },
      { id: 'f22', name: 'FM150_Warranty_Card.pdf', size: '210 KB', type: 'pdf', uploadedAt: '2025-10-05', category: 'Warranty', deviceId: 'd5' },
    ],
  },
]
