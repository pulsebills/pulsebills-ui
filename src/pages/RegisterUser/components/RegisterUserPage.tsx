import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterUserPage = () => {
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

  const handleGoogleSignup = () => {
    console.log("Google signup clicked", formData);
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
          onClick={handleGoogleSignup}
          variant="outline"
          className="w-full flex items-center justify-center gap-3 py-6 border-gray-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Signup Request with Google
        </Button>
      </div>
    </div>
  );
};

export default RegisterUserPage;
