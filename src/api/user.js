import axios from "axios";

const apiRootUrl = "https://reqres.in";

// Just a sample api call for reference
export default {
  getUsers(page, perPage) {
    return axios.get(`${apiRootUrl}/api/users?page=${page}&per_page${perPage}`);
  }
};
