import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});



export async function PostProduto(produto) {
  const response = await axiosClient.post('/produtos', produto)

  return response
}
