import {useEffect} from 'react';

import { useCity } from '../context/CityContext';

import citysJson from '../data/citys.json'

const Main = () => {

    const { cityName } = useCity()

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'a04d3b9b0emsh5ec26dc7aeb22dbp1d91fdjsn303d514f2331',
    //             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //         }
    //     };
        
    //     fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=7&lang=tr`, options)
    //         .then(response => response.json())
    //         .then((response) => {
    //             console.log(response.current);
    //             console.log(response.forecast.forecastday);
    //         })
    //         .catch(err => console.error(err));
    // }, [])

  return (
    <div>
        {cityName}
    </div>
  )
}

export default Main