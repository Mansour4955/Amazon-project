import axios from "axios"
export async function productsData(){
  const products = axios.get("https://fakestoreapi.com/products")
  return products
}


