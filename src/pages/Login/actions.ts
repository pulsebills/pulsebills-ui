import axiosInstance from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginWithGoogleToken = createAsyncThunk(
  "auth/loginWithGoogleToken",
  async (accessToken: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);

      return response.data; // UserInfo
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  }
);
