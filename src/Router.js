import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SearchErrors from "./components/SearchErrors";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout />,
        children: [
            { path: "/" , element: <Home />, errorElement: <SearchErrors /> },
            { path: "contact", element: <Contact /> },
        ]
    }
])