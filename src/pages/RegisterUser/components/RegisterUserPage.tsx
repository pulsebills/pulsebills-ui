import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const RegisterUserPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    department: "",
    comments: "",
    confirmData: false,
  });

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      confirmData: checked,
    });
  };

  const continueToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Request Access to "Org Name"</h1>
        <p className="text-gray-600 text-sm">
          Fill in the details below. Your request will be reviewed by the
          Organisation Admin.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Role Requesting for */}
        <div className="space-y-2">
          <Label htmlFor="role">Role Requesting for*</Label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={(e) => handleSelectChange("role", e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-gray-300 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select your role in the Organisation</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="pharmacist">Pharmacist</option>
            <option value="receptionist">Receptionist</option>
            <option value="admin">Admin</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Department (Optional) */}
        <div className="space-y-2">
          <Label htmlFor="department">Department (Optional)</Label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={(e) => handleSelectChange("department", e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-gray-300 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select your Department in the Organisation</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="radiology">Radiology</option>
            <option value="emergency">Emergency</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Comments */}
        <div className="space-y-2">
          <Label htmlFor="comments">Comments</Label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleTextareaChange}
            placeholder="Select your Department in the Organisation"
            rows={4}
            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />
        </div>

        {/* Confirmation Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <Checkbox
            id="confirmData"
            checked={formData.confirmData}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="confirmData"
            className="text-sm text-gray-700 leading-tight cursor-pointer"
          >
            I confirm that the information provided is correct and I agree to
            the organisation's data policy.
          </label>
        </div>

        {/* Google Signup Button */}
        <Button
          onClick={continueToDashboard}
          variant="outline"
          className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium group"
        >
          Continue to dashboard
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
      </div>
    </div>
  );
};

export default RegisterUserPage;
