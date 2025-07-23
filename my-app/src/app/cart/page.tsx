import { CartApi } from "@/client";
import { Configuration } from "@/client/runtime";
import Link from "next/link";

export default async function CartPage() {
  const config = new Configuration({ basePath: "http://localhost:8060/api" });
  const cartApi = new CartApi(config);
  const cart = await cartApi.listCart();

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.variant_id}
          </li>
        ))}
      </ul>
      <Link href="/checkout">Checkout</Link>
    </div>
  );
}
