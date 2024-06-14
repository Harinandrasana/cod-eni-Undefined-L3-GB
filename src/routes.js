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
<<<<<<< HEAD
            { path: "/about", element: <AboutBanner/>},
            { path: "/withSpeechBubbles", element: <WithSpeechBubbles/>},
          
=======
            { path: "/about", element: <AboutBanner /> },
            { path: "/withSpeechBubbles", element: <WithSpeechBubbles /> },
            { path: "/Home", element: <Home /> },
>>>>>>> 10343e04dbeb2526f52e587d3b205fe81b0cfafb
        ],
    },
]);

export default router;
