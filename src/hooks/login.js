import apiClient from "../services/api-client";
import useNotification from "./useNotification";

const useLogin = () => {
    const { displayToast } = useNotification();

    const login = async (values) => {
        try {
            console.log(values);
            const response = await apiClient.post("/login", values);
            const userData = response.data[0];

            if (userData) {
                localStorage.setItem("users", userData.username);
                window.location.reload();
            }
        } catch (err) {
            console.error("Login failed:", err);
            displayToast("error", "Échec de la connexion");
        }
    };

    return { login };
};

export default useLogin;
