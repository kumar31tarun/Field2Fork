import { Link, useLocation } from "react-router-dom";
import { Home, Star, Users, Package } from "lucide-react"; // Added Package icon for products

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Buyers List", path: "/admin/buyers", icon: <Users size={20} /> },
    { name: "Sellers List", path: "/admin/sellers", icon: <Users size={20} /> },
    { name: "Reviews", path: "/admin/reviews", icon: <Star size={20} /> },
    { name: "Products", path: "/admin/products", icon: <Package size={20} /> },
    { name: "Home", path: "/", icon: <Package size={20} /> }, // New Products option
  ];

  return (
    <div className="w-72 bg-gradient-to-br from-gray-900 to-gray-800 text-white h-screen p-6 shadow-2xl rounded-r-2xl">
      <h2 className="text-3xl font-semibold mb-6 tracking-wide text-gray-200">
        Admin Panel
      </h2>
      <ul>
        {navItems.map((item) => (
          <li key={item.path} className="mb-3">
            <Link
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                location.pathname === item.path
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
