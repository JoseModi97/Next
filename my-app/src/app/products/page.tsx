import { ProductsApi } from "@/client";
import { Configuration } from "@/client/runtime";
import Link from "next/link";

export default async function ProductsPage() {
  const config = new Configuration({ basePath: "http://localhost:8060/api" });
  const productsApi = new ProductsApi(config);
  const products = await productsApi.listProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
