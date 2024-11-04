import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});



export async function PostProduto(produto) {
  const response = await axiosClient.post('/produtos', produto)

  return response
}

export async function GetProdutosForYou() {
  const response = await axiosClient.get("/produtos?page=1&pageSize=4")
  return response
}

export async function PostCart() {
  const response = await axiosClient.post("/carrinhos")
  return response
}

export async function PatchCart(id) {
  const response = await axiosClient.patch("/carrinhos/${id}")
  return response
}
