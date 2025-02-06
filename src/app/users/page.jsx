import { fetchUsers } from "@/services/api";
import Link from "next/link";

export default async function UserListPage() {
  const users = await fetchUsers();
  return (
    <div className="">
      <h1 className="text-center text-lg font-semibold">Random Users List</h1>
      <div className="mt-8 grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-y-8 gap-x-4">
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              className="px-3 rounded-lg py-5 shadow-xl shadow-blue-500/15 border border-blue-500/20"
            >
              <h1 className="">{user.name}</h1>
              <p className="my-2 text-xs">Email: {user.email}</p>
              <p className="mb-6 text-xs">Phone: {user.phone}</p>

              <Link href={user.website}>
                <span className="border px-5 py-1.5 rounded-md bg-violet-600 text-white">
                  Visit
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
