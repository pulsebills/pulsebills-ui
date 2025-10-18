import {
  Activity,
  Users,
  Package,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import type { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { logout } from "@/pages/Login/reducer";

type PropsTypes = {
  children?: React.ReactNode;
};

const DashboardLayout = ({ children }: PropsTypes) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Activity, path: "/dashboard" },
    { id: "patients", label: "Patients", icon: Users, path: "/patients" },
    { id: "services", label: "Services", icon: Package, path: "/services" },
    { id: "invoices", label: "Invoices", icon: FileText, path: "/invoices" },
    { id: "payments", label: "Payments", icon: CreditCard, path: "/payments" },
    { id: "reports", label: "Reports", icon: BarChart3, path: "/reports" },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    dispatch(logout());
    setShowProfileMenu(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {user && user.picture ? (
              <img
                src={user.picture}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <Activity className="w-8 h-8 text-blue-500" strokeWidth={2.5} />
            )}
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Welcome to PulseBills
              </h1>
              <p className="text-xs text-gray-500">{user && user.name}</p>
            </div>
          </div>

          {/* Right Side - Notification & Profile */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
              </button>

              {showProfileMenu && (
                <>
                  {/* Backdrop to close menu */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowProfileMenu(false)}
                  />

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Left Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 flex flex-col">
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Settings at Bottom */}
          <div className="p-3 border-t border-gray-200">
            <Link
              to="/settings"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/settings"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-56 p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
