import apiClient from "../services/api-client";

const useLogin = () => {
    const login = async (values) => {
        try {
            console.log(values)
            const response = await apiClient.post("/login", values);
            console.log("the response :", response.data[0].username);
            if (response.data) {
                localStorage.setItem("users", response.data[0].username);
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return { login };
}

export default useLogin;





