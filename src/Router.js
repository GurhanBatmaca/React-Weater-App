import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainErrors from "./components/MainErrors";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout />,
        children: [
            { index: true, element: <Home />, errorElement: <MainErrors /> },
            { path: "contact", element: <Contact /> },
        ]
    }
])