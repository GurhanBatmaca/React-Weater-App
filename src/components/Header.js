import { useCity } from '../context/CityContext';
import { useWeater } from '../context/WeaterContext';
import { Outlet, Link } from 'react-router-dom';

const Main = () => {

    const { cityName } = useCity();
    const { weater, daysWeater, title, imgURL,loading } = useWeater();

  return (
    <div className='container text-center pb-3'>   
      {
        loading ? <h2>Yükleniyor...</h2> :
        <>
          <div className='main-card row p-2'>
            <div className="card city_card col-lg-4 col-md-6 col-sm-6 bg-light" >
            <h2 className='city-name'>{cityName.toUpperCase()}</h2>
            <img src={`${imgURL}`} className="card-img-top" alt="icon-img"/>
            <div className="card-body p-0">
              <h5 className="card-title temp">{`${weater.temp_c}`}<sup>o</sup></h5>
              <h6 className="card-title feelslike">{`${weater.feelslike_c}`}<sup>o</sup></h6>
              <h6 className={`card-title sky ${title == "Güneşli" && "text-warning" || title == "Açık" && "text-warning" || "text-danger" }`}>{`${title}`}</h6>
              <p className="card-text">{`${weater.temp_c}`} km/s <i className="fa-solid fa-wind"></i></p>
              <p className="card-text">{`${weater.last_updated}`.replaceAll(/-/g,".")}</p>
            </div>
            </div>
          </div>

          <div className="card-group my_cards">
          {
          daysWeater.map((day,index) => (
            <div key={index} className='card days_card p-1 bg-light'>
              <Link to={`/${index}`}>
              <h5 className='text-center city-name p-2  text-dark'>{cityName.toUpperCase()}</h5>
              <img src={`${day.day.condition.icon}`} className="card-img-top text-center" alt="icon-img"/>
              <div className="card-body  text-dark">
                <h5 className="card-title temp">{`${day.day.avgtemp_c}`}<sup>o</sup></h5>
                <h6 className="card-title feelslike max-min">
                  <span>{`${day.day.maxtemp_c}`}<sup>o</sup><span className='ms-2'><i className="fa-solid fa-arrow-up fa-2xs"></i></span></span>
                  <span className=''>{`${day.day.mintemp_c}`}<sup>o</sup><span className='ms-2'><i className="fa-solid fa-arrow-down fa-2xs"></i></span></span>
                </h6>
                <p className="card-text">{`${day.day.avgvis_km}`}  km/s <i className="fa-solid fa-wind"></i></p>
                <p className={`card-title sky ${day.day.condition.text == "Güneşli" && "text-warning" || day.day.condition.text == "Açık" && "text-warning" || "text-danger" }`}>{`${day.day.condition.text}`}</p>
                <p className="card-text">{`${day.date}`.replaceAll(/-/g,".")}</p>
                <p className="card-text max-min">
                  <span>
                  <i className="fa-solid fa-sun"></i> {`${day.astro.sunrise}`} 
                  </span>
                  <span>
                  <i className="fa-solid fa-moon"></i> {`${day.astro.sunset}`}
                  </span>
                </p>
                <p><i className="fa-regular fa-clock"></i></p>
                <p><i className="fa-solid fa-arrow-down"></i></p>
              </div>
              </Link>
            </div>
          ))
          }
          </div>

          <Outlet />
        </>
      }
    </div>
  )
};

export default Main;