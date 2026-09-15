// Healthcare domain helpers

export function createHealthcareEvent(type, data = {}) {
  return {
    id: crypto.randomUUID(),
    type,
    data,
    createdAt: new Date().toISOString()
  };
}
