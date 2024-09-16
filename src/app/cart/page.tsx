import CartProducts from "@/components/cart/CartProducts";
import Container from "@/components/Container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <Container className="py-10">
      <CartProducts />
    </Container>
  );
};

export default CartPage;
