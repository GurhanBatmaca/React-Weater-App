import {useEffect} from 'react';
import { useCity } from '../context/CityContext';
import { useWeater } from '../context/WeaterContext';

const Main = () => {

    const { cityName } = useCity();
    const {weater, setWeater, daysWeater, setDaysWeater,title, setTitle,
    imgURL, setImgURL } = useWeater();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a04d3b9b0emsh5ec26dc7aeb22dbp1d91fdjsn303d514f2331',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=7&lang=tr`, options)
            .then(response => response.json())
            .then((response) => {
                // console.log(response.current);
                setWeater(response.current);
                setTitle(Object.values(response.current.condition)[0]);
                setImgURL(Object.values(response.current.condition)[1]);
                setDaysWeater(response.forecast.forecastday);
                console.log(response.current);
            })
            .catch(err => console.error(err));
    },[cityName])

  return (
    <div>
      <h2 className='text-center'>{cityName.toUpperCase()}</h2>
      <div className="card city_card">
            <img src={`${imgURL}`} className="card-img-top" alt="icon-img"/>
            <div className="card-body">
              <h5 className="card-title">Sıcaklık: {`${weater.temp_c} / Hissedilen: ${weater.feelslike_c}`}</h5>
              <h6 className="card-title">{`${title}`}</h6>
              <p className="card-text">Rüzgar: {`${weater.temp_c}`} km/s</p>
              <p className="card-text">{`${weater.last_updated}`.replaceAll(/-/g,".")}</p>
            </div>
      </div>
      <h6 className='text-center'>{cityName.toUpperCase()} Üç Günlük Tahminler</h6>
      <div className="card-group my_cards">
        {
          daysWeater.map((day,index) => (
            <div key={index} className='card days_card'>
              <img src={`${day.day.condition.icon}`} className="card-img-top text-center" alt="icon-img"/>
              <div className="card-body">
                <h5 className="card-title">Sıcaklık: {`${day.day.avgtemp_c}`}</h5>
                <h6 className="card-title">Endüşük: {`${day.day.mintemp_c}`} Enyüksek: {`${day.day.maxtemp_c}`}</h6>
                <p className="card-text">Rüzgar:  km/s</p>
                <p className="card-text">{`${day.day.condition.text}`}</p>
                <p className="card-text">{`${day.date}`.replaceAll(/-/g,".")}</p>
                <p className="card-text"> Gündoğumu: {`${day.astro.sunrise}`} Günbatımı: {`${day.astro.sunset}`}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Main