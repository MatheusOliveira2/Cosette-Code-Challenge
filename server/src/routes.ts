import express, { Request, Response } from "express";
import shopify from "./shopify";

const routes = express.Router();

routes.get("/products", async (req: Request, res: Response) => {
  const products = await shopify.product.list({ limit: 20 });

  return res.json({ products });
});

export default routes;
