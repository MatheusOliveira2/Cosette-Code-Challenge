import express, { Request, Response, response } from "express";
import shopify from "./shopify";

const routes = express.Router();

routes.get("/products", async (req: Request, res: Response) => {
  const params = req.query;

  try {
    const products = await shopify.product.list({
      limit: 20,
      ...params,
    });

    return res.json({
      products: normalizeProducts(products),
      nextPageParams: products.nextPageParameters,
      previousPageParams: products.previousPageParameters,
    });
  } catch (e) {
    res.status(400);
    return res.send(e);
  }
});

function normalizeProducts(products: any[]) {
  return products.map((p) => {
    return {
      id: p.id,
      title: p.title,
      vendor: p.vendor,
      image: p.image,
      price: p.variants[0]?.price,
      compareAtPrice: p.variants[0]?.compare_at_price,
    };
  });
}

export default routes;
