import {Api} from 'helpers/Api';

const parseResponse = (response) => response.jason()

export const JordanService = {
    getLista: () =>
        fetch(Api.jordanLista(), {method: "GET"}).then(parseResponse),
    getById: (id) =>
        fetch(Api.jordanById, {method: "GET"}).then(parseResponse),
    create: () =>
        fetch(Api.createJordan, {method: "POST"}).then(parseResponse),
    updateById: (id) =>
        fetch(Api.updateJordanById, {method: "PUT"}).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteJordanById, {method: "DELETE"}).then(parseResponse),
}