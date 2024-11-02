import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://e-commerce-back-end-nestjs.onrender.com/', // API URL
});

export default async function PostProduto(data) {
  try {
    const response = await axiosClient.post('/produtos', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar o produto:', error);
    throw error;
  }
}
