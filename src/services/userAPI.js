import axios from 'axios';

axios.defaults.baseURL = 'https://63bad2d656043ab3c7a5ab57.mockapi.io';

export const getUsers = async () => {
  const { data } = await axios(`/users`);
  return data;
};
