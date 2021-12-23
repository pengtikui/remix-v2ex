const API_PREFIX = 'https://www.v2ex.com/api/v2/';
const TOKEN = '';

const fetchApi = (url: string, token: string, options: RequestInit = {}) => {
  return fetch(`${API_PREFIX}${url}`, {
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  })
    .then((res) => res.json())
    .then((res) => res.result);
};

export const getNodeByName = (name: string) => {
  return fetchApi(`nodes/${name}`, TOKEN);
};
