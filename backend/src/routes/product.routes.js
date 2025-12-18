import express from "express";
import { createProduct, getProducts } from "../controllers/product.controller.js"
import auth from '../middleware/auth.middleware.js'


const router = express.Router();

router.get('/', auth, getProducts);
router.post('/', auth, createProduct)

export default router;