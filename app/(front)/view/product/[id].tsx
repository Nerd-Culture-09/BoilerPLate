
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../../types';


const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await axios.get<Product[]>('https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: M{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
