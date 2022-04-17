import { $authHost, $host } from '.';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createGenre = async (genre) => {
  const { data } = await $authHost.post('api/genre', genre);
  return data;
};
export const fetchGenres = async () => {
  const { data } = await $host.get('api/genre');
  return data;
};

export const createBook = async (book) => {
  const { data } = await $authHost.post('api/books', book);
  return data;
};
export const fetchBooks = async () => {
  const { data } = await $host.get('api/books');
  return data;
};
export const fetchOneBooks = async (id) => {
  const { data } = await $host.get('api/books/' + id);
  return data;
};
