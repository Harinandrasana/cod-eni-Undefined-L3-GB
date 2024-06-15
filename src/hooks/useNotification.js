import { useToast } from "@chakra-ui/react";

const useNotification = () => {
    const toast = useToast();

    const displayToast = (status, message) => {
        toast({
            title: status === "success" ? "Succès" : "Erreur",
            description: message,
            status: status,
            duration: 5000,
            isClosable: true,
        });
    };

    return { displayToast };
};

export default useNotification;
