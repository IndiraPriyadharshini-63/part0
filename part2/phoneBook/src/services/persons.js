import axios from "axios";
const url = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(url);
};

const create = (newObj) => {
  return axios.post(url, newObj);
};

const update = (id, newObj) => {
  return axios.put(`${url}/${id}`, newObj);
};
const deletePerson = (id) => {
  return axios.put(`${url}/${id}`);
};

export default {
  getAllPersons: getAllPersons,
  create: create,
  update: update,
  deletePerson: deletePerson,
};
