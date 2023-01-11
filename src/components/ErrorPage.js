import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className='text-center bg-light p-5 error-page'>     
      <h2 className='p-5'>BEKLENMEDİK BİR HATA OLUŞTU</h2>
      <i className="fa-solid fa-bug"></i>
      <h3 className="p-3">Lütfen adresi doğru yazdığınıza emin olun.</h3>
      <Link className="text-dark" to={"/"}><span className="fs-4">Geri dön </span><i className="fa-solid fa-reply"></i></Link>
    </div>
  )
};

export default ErrorPage;