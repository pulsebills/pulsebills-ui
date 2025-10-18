import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { User } from "lucide-react";

const DashboardPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  
  // Get user initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      ?.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U';
  };

  return (
    <main className="flex-1 p-8">
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Pulse Bills
        </h1>
        
        {/* Profile Picture */}
        <div className="mb-4">
          {user?.picture ? (
            <img 
              src={user.picture} 
              alt={user.name || 'User'}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center border-4 border-blue-600 shadow-lg">
              <span className="text-white text-2xl font-semibold">
                {user?.name ? getInitials(user.name) : <User className="w-10 h-10" />}
              </span>
            </div>
          )}
        </div>
        
        {/* User Name */}
        <p className="text-xl font-medium text-gray-700">
          {user?.name || 'Guest User'}
        </p>
      </div>
    </main>
  );
};

export default DashboardPage;