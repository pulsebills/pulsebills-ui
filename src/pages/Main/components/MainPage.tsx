import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const MainPage = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleCheckIn = () => {
    navigate("/login");
  };

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome to <span className="text-blue-500">Pulse</span>
          <span className="text-green-500">Bills.</span>
        </h2>
        <p className="text-gray-500 italic mt-2">
          Where invoices find their rhythm.
        </p>
      </div>

      {/* Form */}
      <div className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="orgId" className="text-gray-700">
            Organisational ID<span className="text-red-500">*</span>
          </Label>
          <Input
            id="orgId"
            type="text"
            placeholder="Ex: Medplus123"
            className="h-12"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(checked) => setAccepted(checked === true)}
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I accept the terms & conditions of Pulsebills
          </label>
        </div>

        <Button onClick={handleCheckIn} className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium group">
          Check-In
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>

        <p className="text-center text-sm text-gray-600 text-left">
          New Organisation?{" "}
          <Link to="register-org" className="text-blue-500 hover:text-blue-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
