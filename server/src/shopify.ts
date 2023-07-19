import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: "cosette-matheus",
  accessToken: "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",
});

export default shopify;
