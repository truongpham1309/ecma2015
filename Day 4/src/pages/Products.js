import { products } from "../data/products";

const ProductsList = () => {
  return `
    <div>
        ${products.map(product => `<li>${product.name}</li>`).join(" ")} 
    </div>
  `
}

export default ProductsList