import express from "express";
import asyncHandler from "express-async-handler";
import * as data from "../data.js";
import Products from "../models/products.js";
import { isAuth, isAdmin } from "../utils.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const products = await Products.find().exec()
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: "product get error !! " });
    }
  })
);

router.get(
  "/seed",
  isAuth,
  isAdmin,
  asyncHandler(async (req, res) => {
    
    const createdProducts = await Products.insertMany(data.products);
    res.send({ createdProducts });
  })
);

router.get("/:id", async (req, res) => {
  const pid = req.params.id
  let product ;

  try {
     product = await Products.findById(pid);
    
  } catch (error) {
    res.status(404).send("product does not exist");
  }
  res.json(product)
});

export default router;

