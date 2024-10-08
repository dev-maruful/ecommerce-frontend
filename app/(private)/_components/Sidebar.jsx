import Link from "next/link";

const navLinks = [
  { id: 1, title: "Add Product", path: "add-product" },
  { id: 2, title: "Add Category", path: "add-category" },
  { id: 3, title: "Users", path: "users" },
  { id: 4, title: "Products", path: "products" },
  { id: 5, title: "Orders", path: "orders" },
  { id: 6, title: "Settings", path: "settings" },
  { id: 7, title: "Logout", path: "logout" },
];

export default function Sidebar() {
  return (
    <div className="min-h-[calc(100vh-88px)] w-1/4 bg-gray-200 p-5 text-body-large">
      <ul className="flex flex-col gap-3">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link
              href={`/super-admin/dashboard/${navLink.path}`}
              className="px-3 py-2 rounded-lg w-fit hover:bg-gray-300"
            >
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
