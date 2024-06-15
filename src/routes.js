import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import HelpPage from "./pages/HelpPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage"
import AboutBanner from "./pages/AboutBanner";
import WithSpeechBubbles from "./pages/WithSpeechBubbles";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import Publicitaire from "./pages/Publicitaire";
import Accueil from "./pages/Accueil";
import ServiceDetails from "./pages/ServiceDetails";
import { connectedUser } from "./constant";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            { path: "/help", element: <HelpPage /> },
            { path: "/services", element: <ServicesPage /> },
            { path: "/contact", element: <ContactPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/about", element: <AboutBanner /> },
            { path: "/withSpeechBubbles", element: <WithSpeechBubbles /> },

            { path: "/about", element: <AboutBanner /> },
            { path: "/withSpeechBubbles", element: <WithSpeechBubbles /> },
            { path: "/Home", element: <Home /> },
            { path: "/LoginForm", element: connectedUser === null ? <LoginForm /> : <ServicesPage /> },
            { path: "/SignupForm", element: connectedUser === null ? <SignupForm /> : <ServicesPage /> },
            { path: "/Publiciaire", element: <Publicitaire /> },
            { path: "/Accueil", element: <Accueil /> },
            { path: "/services/:id", element: <ServiceDetails /> }
        ],
    },
]);

export default router;
