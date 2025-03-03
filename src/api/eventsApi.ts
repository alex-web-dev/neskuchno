import apiClient from './axiosInstance';

export const getEvents = async (page = 0, types: number[] = []) => {
  const typeParams = types.map((t) => `types=${t}`).join('&');
  const response = await apiClient.get(`object/list/?page=${page}&${typeParams}`);
  return response.data;
};

export const getEvent = async (id: number) => {
  const response = await apiClient.get(`object/${id}/`);
  return response.data;
};
