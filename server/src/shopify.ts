import Shopify from "shopify-api-node";

import { config } from "dotenv";
config();

const shopify = new Shopify({
  shopName: "cosette-matheus",
  accessToken: process.env.SHOPIFY_API_TOKEN as string,
});

export default shopify;
