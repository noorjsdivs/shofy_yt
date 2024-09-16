import Container from "@/components/Container";
import ProductsSideNav from "@/components/products/ProductsSideNav";
import { getData } from "../helpers";
import PaginationProductList from "@/components/products/PaginationProductList";

const ProductsPage = async () => {
  const endpoint = `https://dummyjson.com/products`;
  const productsArray = await getData(endpoint);
  const { products } = productsArray;

  return (
    <Container className="py-10">
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden md:inline-flex h-full">
          <ProductsSideNav />
        </div>
        <PaginationProductList products={products} />
      </div>
    </Container>
  );
};

export default ProductsPage;
