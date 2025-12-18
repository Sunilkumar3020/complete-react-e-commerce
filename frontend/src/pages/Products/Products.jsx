import { useContext, useState } from "react"
import { ProductContext } from "../../context/product/ProductContext"
import { fetchProducts, addProduct } from '../../context/product/productActions'

const Products = () => {
    const { state, dispatch } = useContext(ProductContext)
    const [productField, setProductFiled] = useState({
        title: '',
        price: 0
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        setProductFiled((prev) => (
            {
                ...prev,
                [name]: value

            }
        ))
    }

    const handleAddProduct = () => {
        const { title, price } = productField;
        addProduct(dispatch, { title, price })
        productField.title = '';
        productField.price = ''
    }

    return (
        <div>
            <h2>Products</h2>
            <input type="text" placeholder="Title" name="title" id="title" onChange={handleInputChange} value={productField.title} />
            <input type="text" name="price" id="price" onChange={handleInputChange} value={productField.price} />
            <button onClick={handleAddProduct} >  Add</button>

            <ul>{
                state.products.map((product) => (
                    <li key={product._id}>
                        {product.title} -${product.price}
                    </li>
                ))

            }</ul>

        </div>
    )
}

export default Products;