import express from "express";
import shopify from "./shopify";

const routes = express.Router();

routes.get("/products", async (req, res) => {
  console.log(shopify);
  const number = await shopify.product.count();
  console.log(number);
  return res.json({ count: number });
});

export default routes;
