import axios from "axios";

interface Product {
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    size: string;
    category: string;
    subcategory: string;
    status: string;
    color: string;
    thumbnail: string;
    image_one: string;
    image_two: string;
    image_three: string;
  }

async function serchByDesc(searchQuery:string) {
    try {
      const response = await axios.get<Product[]>(`https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/search?searchParam=s${searchQuery}`);
      return response.data
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }