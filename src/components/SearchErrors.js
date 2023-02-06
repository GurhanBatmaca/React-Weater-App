import { useEffect } from "react"
import { UseWeater } from "../context/WeaterContext";
import { useNavigate } from "react-router-dom"

const SearchErrors = () => {

  const navigate = useNavigate();
  const { setCity } = UseWeater();
  
  setCity("istanbul");
  useEffect(() => {
    
    setTimeout(() => {
      navigate("/");
    },2000)
  });

  return (
    <div className="search-error container text-center">
        <h2 className="p-3">Şehir bulunamadı!</h2>
        <h3 className="p-3">Anasayfa'ya Yönlendiriliyorsunuz...</h3>
        <i className="fa-solid fa-sync fa-spin fa-2x"></i>
    </div>
  )
}

export default SearchErrors

