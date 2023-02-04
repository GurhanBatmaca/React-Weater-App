import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [showNavbar, setshowNavbar] = useState(true);

  const getNavbar = () => {
    setshowNavbar(!showNavbar);
  };

  return (
    <>
      {
        showNavbar && <button className="close-btn btn btn-outline" onClick={getNavbar} >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      }
      { !showNavbar &&     
        <div className='my_navbar'>
          <nav className="">
              <button className="open-btn btn btn-outline" onClick={getNavbar}><i className="fa-solid fa-arrow-left"></i></button>
              <NavLink to={"/"}><i className="fa-solid fa-wind fa-2x"></i></NavLink>
              <NavLink to={"contact"}><i className="fa-solid fa-message fa-2x"></i></NavLink>
              <NavLink><i className="fa-solid fa-map-location-dot fa-2x"></i></NavLink>
          </nav>
        </div>
      }
    </>
  )
};

export default Navbar;