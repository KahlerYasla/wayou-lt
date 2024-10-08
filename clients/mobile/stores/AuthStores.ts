import { create } from 'zustand';
import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from "../constants";

export interface Auth {
    userId: number;
    userName: string;
    token: string;
}

interface AuthState {
    auth: Auth | null;
    requestLogin: (userName: string, password: string) => Promise<boolean>;
    // requestRegister: (userName: string, email: string, password: string) => Promise<boolean>;
}

export const useAuthCredentials = create<AuthState>((set) => ({
    auth: null,

    requestLogin: async (userName: string, password: string): Promise<boolean> => {
        console.log("Login request sent with username:" + userName + " and password:" + password);

        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login`, {
                username: userName,
                password: password,
            });

            if (response.status === 200 && response.data && response.data.data) {
                const token = response.data.data.token;
                const userId = response.data.data.userId;

                console.log('Response data:', response.data);

                set({
                    auth: {
                        userId: userId,
                        userName: userName,
                        token: token,
                    }
                });

                return true;
            }
            else {
                console.error("Error: Unexpected response status code or no token received");

                alert("Login Failed, check your credentials");

                return false;
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.error('Error:', axiosError);
                if (axiosError.response) {
                    console.error('Response data:', axiosError.response.data);
                    console.error('Response status:', axiosError.response.status);
                    console.error('Response headers:', axiosError.response.headers);
                } else if (axiosError.request) {
                    console.error('Request data:', axiosError.request);
                } else {
                    console.error('Error message:', axiosError.message);
                }
                console.error('Error config:', axiosError.config);
            } else {
                console.error('Error:', error);
            }
            alert("Login Failed");
            return false;
        }
    },

    // requestRegister: async (userName: string, email: string, password: string): Promise<boolean> => {
    // }

}));
