import express, { Request, Response, response } from "express";
import shopify from "./shopify";

const routes = express.Router();

routes.get("/products", async (req: Request, res: Response) => {
  const params = req.query;

  try {
    const products = await shopify.product.list({
      limit: 1,
      ...params,
    });

    return res.json({
      products,
      nextPageParams: products.nextPageParameters,
      previousPageParams: products.previousPageParameters,
    });
  } catch (e) {
    res.status(400);
    return res.send(e);
  }
});

export default routes;
