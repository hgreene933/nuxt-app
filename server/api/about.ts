interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default defineEventHandler(async () => {
  const products = await fetch("https://dummyjson.com/products?limit=10");

  const productsJson: IProduct[] = (await products.json()).products;

  return productsJson;
});
