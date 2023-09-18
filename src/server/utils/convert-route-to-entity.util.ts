const mapping: Record<string, string> = {
  clinics: 'clinic',
  customers: 'customer',
  notes: 'note',
  pets: 'pet',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
