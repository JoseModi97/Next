import { ProductsApi } from "@/client";
import { Configuration } from "@/client/runtime";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const config = new Configuration({ basePath: "http://localhost:8060/api" });
  const productsApi = new ProductsApi(config);
  const product = await productsApi.viewProduct({ id: params.id });

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
