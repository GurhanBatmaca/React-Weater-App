import { UseWeater } from "../context/WeaterContext"

const Deatails = () => {

    const { weater } = UseWeater();

  return (
    <div className='details'>
        <div className='detail'>
            <div>
              <div><i className="fa-sharp fa-solid fa-temperature-half"></i> Hissdilen</div>
              {weater.feelslike_c}<sup>o</sup>
            </div>
            <div>
              <div><i className="fa-solid fa-wind"></i> Rüzgar</div>
              {weater.wind_kph} km/s
            </div>
        </div>

        <div className='detail'>
            <div>
              <div><i className="fa-solid fa-water"></i> Nem</div>
              %{weater.humidity}
            </div>
            <div>
            <div><i className="fa-regular fa-sun"></i> UV İndex</div>
            {weater.uv}
            </div>
        </div>
    </div>
  )
}

export default Deatails