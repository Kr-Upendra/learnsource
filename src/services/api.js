const baseUrl = process.env.API_BASE_URL;

export const fetchUsers = async () => {
  const response = await fetch(`${baseUrl}/users`);
  const data = await response.json();
  return data;
};
