// Request validation utilities for patient-access-gateway

export function validateHealthcareRequest(payload = {}) {
  return {
    valid: payload !== null && typeof payload === "object",
    validatedAt: new Date().toISOString()
  };
}
