interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Veterinarian', 'Veterinary Nurse'],
  tenantName: 'Clinic',
  applicationName: 'vettest',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage clinics',
    'Invite Veterinarians and Veterinary Nurses',
    'Remove Veterinarians or Veterinary Nurses',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fc86d205-9bf7-41b0-9227-719fdd6d3e12',
};
