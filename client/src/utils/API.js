import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  inputQuestion: function(section, question) {
    return axios.post("/api/inputquestion", section, question)
  },
  addClient: function(firstName, lastName, email, phone, streetAddress, aptUnitNum, city, state, zip, assessor, audit, dwelling, gateCode) {
    return axios.post("/api/addClient", firstName, lastName, email, phone, streetAddress, aptUnitNum, city, state, zip, assessor, audit, dwelling, gateCode)
  },
  getSections: function() {
    return axios.get("/api/getSections")
  },
  getQuestions: function(sectionID) {
    return axios.get("/api/getQuestions/" + sectionID)
  },
  getClients: function() {
    return axios.get("/api/getClients")
  },
  submitAssessment: function(ClientId, SectionId, QuestionId, response, observation, comment) {
    return axios.post("/api/submitAssessment", ClientId, SectionId, QuestionId, response, observation, comment)
  },
  getResults: function(ClientId) {
    return axios.get("api/getResults", ClientId)
  }
};
