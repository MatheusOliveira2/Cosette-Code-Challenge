import express from "express";

const routes = express.Router();

routes.get("/products", (req, res) => res.json({}));

export default routes;
