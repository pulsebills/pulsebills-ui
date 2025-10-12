import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { useNavigate } from "react-router-dom";

const RegisterOrginationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    orgName: "",
    orgId: "",
    orgType: "",
    address: "",
    zipcode: "",
    // Step 2
    fullName: "",
    phoneNumber: "",
    secondaryEmail: "",
    acceptResponsibility: false,
    acceptTerms: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    navigate("/login");
    // Submit to API
  };

  const handleAlreadyRegistered = () => {
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Create Your Organisation</h1>
        <p className="text-gray-600 text-sm">
          Enter your organisation details.
          <br />
          You will be registered as the{" "}
          <span className="font-semibold">SuperUser (Admin)</span> for this
          organisation.
        </p>
      </div>

      {/* Step 1: Organisation Information */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="pb-2 border-b-2 border-gray-200 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Organisation Information
              </h2>
              <span className="text-sm text-gray-500">Step 1/2</span>
            </div>
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Organisation Name</Label>
              <Input
                id="orgName"
                name="orgName"
                type="text"
                placeholder="Ex: James Clinic"
                value={formData.orgName}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="orgId">Organisation ID</Label>
              <div className="relative">
                <Input
                  id="orgId"
                  name="orgId"
                  type="text"
                  placeholder="Jamesclinic765"
                  value={formData.orgId}
                  onChange={handleInputChange}
                  className="bg-gray-50"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 text-sm hover:underline"
                >
                  Create my own
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="orgType">Type of Organisation</Label>
              <select
                id="orgType"
                name="orgType"
                value={formData.orgType}
                onChange={handleInputChange}
                className="w-full h-10 px-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select your Organisation type</option>
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="laboratory">Laboratory</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="Ex: 123,HSR Layout, Sector 2, Bangalore"
                value={formData.address}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipcode">Zipcode</Label>
              <Input
                id="zipcode"
                name="zipcode"
                type="text"
                placeholder="Ex: 600001"
                value={formData.zipcode}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
            </div>
          </div>

          <Button
            onClick={handleNext}
            className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Button
            onClick={handleAlreadyRegistered}
            variant="outline"
            className="w-full py-6 border-gray-300 hover:bg-gray-50"
          >
            No, I've Already Registered My Org
          </Button>
        </div>
      )}

      {/* Step 2: Admin Information */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="pb-2 border-b-2 border-gray-200 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Admin's Information</h2>
              <span className="text-sm text-gray-500">Step 2/2</span>
            </div>
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300"
              style={{ width: "100%" }}
            ></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name*</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Ex: James Cameron"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Primary Phone Number*</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Ex: 9836382901"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondaryEmail">Secondary Email</Label>
              <Input
                id="secondaryEmail"
                name="secondaryEmail"
                type="email"
                placeholder="Ex: Jack88@gmail.com"
                value={formData.secondaryEmail}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="acceptResponsibility"
                  checked={formData.acceptResponsibility}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(
                      "acceptResponsibility",
                      checked as boolean
                    )
                  }
                />
                <label
                  htmlFor="acceptResponsibility"
                  className="text-sm text-gray-700 leading-tight cursor-pointer"
                >
                  I accept that I am the primary admin responsible for managing
                  this organisation's users & data.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("acceptTerms", checked as boolean)
                  }
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-sm text-gray-700 leading-tight cursor-pointer"
                >
                  I agree to the Terms & Conditions & Privacy Policy of
                  Pulsebills.
                </label>
              </div>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            Create a Request
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>

          <Button
            onClick={handleBack}
            variant="outline"
            className="w-full py-6 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Take me back
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Button
            onClick={handleAlreadyRegistered}
            variant="outline"
            className="w-full py-6 border-gray-300 hover:bg-gray-50"
          >
            No, I've Already Registered My Org
          </Button>
        </div>
      )}
    </div>
  );
};

export default RegisterOrginationPage;
