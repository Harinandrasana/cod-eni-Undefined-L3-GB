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
            { path: "/about", element: <AboutBanner/>},
            { path: "/withSpeechBubbles", element: <WithSpeechBubbles/>}
        ],
    },
]);

export default router;
