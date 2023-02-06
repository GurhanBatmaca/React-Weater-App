import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound'>
        <div className='container text-center p-5 text-light'>
            <h2 className='p-3'>Ooops Adres Bulunamadı!</h2>
            <div><i className="fa-solid fa-triangle-exclamation fa-fade fa-2x"></i></div>
            <p className='p-3'>Lütfen adresi doğru yazdığınızdan emin olun.</p>
            <div><i className="fa-solid fa-house"></i></div>
            <i className="fa-solid fa-angles-left"></i>
            <NavLink className={"text-light"} to={"/"} > Ana Sayfaya Dön</NavLink>
        </div>
    </div>
  ) 
}

export default NotFound