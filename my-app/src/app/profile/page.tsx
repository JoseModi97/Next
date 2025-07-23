import { UsersApi } from "@/client";
import { Configuration } from "@/client/runtime";

export default async function ProfilePage() {
  const config = new Configuration({ basePath: "http://localhost:8060/api" });
  const usersApi = new UsersApi(config);
  // TODO: get user from session
  const user = await usersApi.viewUser({ id: "1" });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
    </div>
  );
}
