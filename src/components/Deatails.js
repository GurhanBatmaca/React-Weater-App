import { UseWeater } from "../context/WeaterContext"

const Deatails = () => {

    const { weater } = UseWeater();

  return (
    <div className='details'>
        <div className='detail'>
            <div>Hissdilen {weater.feelslike_c}<sup>o</sup> <i className="fa-sharp fa-solid fa-temperature-half"></i></div>
            <div>{weater.wind_kph} km/s <i className="fa-solid fa-wind"></i></div>
        </div>

        <div className='detail'>
            <div>Nem {weater.humidity} <i className="fa-solid fa-water"></i></div>
            <div>UV İndex {weater.uv} <i className="fa-regular fa-sun"></i></div>
        </div>
    </div>
  )
}

export default Deatails