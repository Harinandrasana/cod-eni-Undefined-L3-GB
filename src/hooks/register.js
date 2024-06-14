import apiClient from "../services/api-client";

const useRegister = () => {
    const register = async (values) => {
        try {
            console.log(values);
            const response = await apiClient.post("/register", values);
            return response.data;
        } catch (err) {
            console.error("Registration error:", err);
            throw err;
        }
    };

    return { register };
};

export default useRegister;
