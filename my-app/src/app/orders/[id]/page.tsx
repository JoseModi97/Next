import { OrdersApi } from "@/client";
import { Configuration } from "@/client/runtime";

export default async function OrderPage({
  params,
}: {
  params: { id: string };
}) {
  const config = new Configuration({ basePath: "http://localhost:8060/api" });
  const ordersApi = new OrdersApi(config);
  const order = await ordersApi.viewOrder({ id: params.id });

  return (
    <div>
      <h1>Order {order.id}</h1>
      <p>Date: {order.order_date}</p>
      <p>Total: {order.total}</p>
    </div>
  );
}
