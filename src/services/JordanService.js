import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformJordan = (jordans) => {
  return {
    ...jordans,
    id: jordans._id,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((jordans) => jordans.map(transformJordan));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformJordan);

export const JordanService = {
  getLista: () =>
    fetch(Api.jordanLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.jordanById(id), { method: "GET" }).then(parseTransformItem),
  create: (jordan) =>
    fetch(Api.createJordan(), {
      method: "POST",
      body: JSON.stringify(jordan),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseTransformItem),
  updateById: (id, jordan) =>
    fetch(Api.updateJordanById(id), {
      method: "PUT",
      body: JSON.stringify(jordan),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteJordanById(id), { method: "DELETE" }).then(parseResponse),
};
