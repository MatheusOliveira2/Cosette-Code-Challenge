import axios from "axios";

export default axios.create({
  baseURL:
    "https://cosette-matheus.myshopify.com/admin/api/2023-07/products.json",
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": import.meta.env.VITE_API_TOKEN as string,
  },
});
