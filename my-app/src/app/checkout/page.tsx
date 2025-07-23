"use client";

import { OrdersApi } from "@/client";
import { Configuration } from "@/client/runtime";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const config = new Configuration({ basePath: "http://localhost:8060/api" });
    const ordersApi = new OrdersApi(config);
    const order = await ordersApi.addOrder({
      addOrder: {
        user_id: "1", // TODO: get user from session
        order_date: new Date().toISOString(),
        total: "100", // TODO: calculate total from cart
      },
    });
    router.push(`/orders/${order.id}`);
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
