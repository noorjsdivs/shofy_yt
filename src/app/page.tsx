import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "./helpers";

export default async function Home() {
  const endpoint = `https://dummyjson.com/products`;
  const product = await getData(endpoint);

  return (
    <main>
      <Banner />
      <ProductList product={product} />
    </main>
  );
}
