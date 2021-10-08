const baseUrl = 'http://localhost:8000';

const apiEndpoints = {
  raw: `${baseUrl}/ct-scans/raw`,
  deid: `${baseUrl}/ct-scans/deid`,
  vidaProcessed: `${baseUrl}/ct-scans/vida-processed`,
  deidentify: `${baseUrl}/ct-scans/de-identify`,
};

export default apiEndpoints;
