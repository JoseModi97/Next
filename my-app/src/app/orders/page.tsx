import { OrdersApi } from "@/client";
import { Configuration } from "@/client/runtime";
import Link from "next/link";

export default async function OrdersPage() {
  const config = new Configuration({ basePath: "http://localhost:8060/api" });
  const ordersApi = new OrdersApi(config);
  const orders = await ordersApi.listOrders();

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link href={`/orders/${order.id}`}>
              Order from {order.order_date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
