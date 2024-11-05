import { endpoints } from "../api";
import axiosInstance from "../utils/axios";
import useAuthStore from "../zustand/auth";

interface UserI {
  fullName: string;
  email: string;
  createdAt: string;
  _id: string;
}

interface FetchUserResponseType {
  error: boolean;
  message: string;
  user: UserI;
}

export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get<FetchUserResponseType>(
      endpoints.getUser
    );
    return response;
  } catch (error) {
    console.log(
      "fetchUser error, user will be logged out. Error details:",
      error
    );
    useAuthStore.getState().clearToken();
  }
};
