import {useEffect} from 'react';
import { useCity } from '../context/CityContext';

const Main = () => {

    const { cityName } = useCity();

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
                console.log(response.current);
                console.log(response.current.condition);
                console.log(response.forecast.forecastday);
            })
            .catch(err => console.error(err));
    }, [cityName])

  return (
    <div>
      <h2 className='text-center'>{cityName.toUpperCase()}</h2>
      <div className='card-group'>
        
      </div>
    </div>
  )
}

export default Main