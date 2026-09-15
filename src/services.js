// Healthcare service layer for patient-access-gateway

export function getServiceStatus() {
  return {
    service: "patient-access-gateway",
    status: "operational",
    layer: "healthcare-service"
  };
}
