import Product from "../model/product.models.js";
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        console.error(error)
        res.json("Product not found")
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, new product not created.' })
    }
}