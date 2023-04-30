import axios from "axios";

axios.defaults.baseURL = "https://63bad2d656043ab3c7a5ab57.mockapi.io";

export const getUsers = async (page = 1) => {
  const { data } = await axios(`/users?page=${page}&limit=3`);
  return data;
};
