import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';

type Params = {
  id: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  size: string;
  category: string;
  subcategory: string
  status: string;
  color: string;
  thumbnail: string;
  image_one: string;
  image_two: string;
  image_three: string;
  _v: number;

  // Add other fields as necessary
};

type ProductsProps = {
  product: Product;
};

export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext<Params>) => {
  const { id } = context.params!;

  // Fetch data based on the id
  const product = await fetch(`https://https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/products/${id}`).then(res => res.json());

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const products = await fetch('https://https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/products').then(res => res.json());

  const paths = products.map((product: Product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false, 
  };
};

const Products = ({ product }: ProductsProps) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: M{product.price}</p>
    </div>
  );
};

export default Products;
