const JordanContext = {
  jordanEndpoint: () => `${Api.baseUrl}/jordans`,
  jordanLista: () => `${JordanContext.jordanEndpoint()}/all-jordans`,
  jordanById: (id) => `${JordanContext.jordanEndpoint()}/one-jordan/${id}`,
  createJordan: () => `${JordanContext.jordanEndpoint()}/create-jordan`,
  updateJordanById: (id) => `${JordanContext.jordanEndpoint()}/update-jordan/${id}`,
  deleteJordanById: (id) => `${JordanContext.jordanEndpoint()}/delete-jordan/${id}`,
};

export const Api = {
  baseUrl: "https://api-jordanstore-blue.onrender.com",
  ...JordanContext,
};
