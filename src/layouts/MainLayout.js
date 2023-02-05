import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export const MainLayout = () => {
    return(
        <div className="main-layout ">
            <Navbar />
            <Outlet />

        </div>
    );
}