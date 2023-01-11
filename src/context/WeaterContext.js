import { createContext,useContext,useState,useEffect } from "react";
import { useCity } from "./CityContext";

const WeaterContext = createContext();

export const WeaterProvider = ({children}) => {

    const { cityName } = useCity();

    const [weater,setWeater] = useState({});
    const [daysWeater, setDaysWeater] = useState([]);
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [hours, setHours] = useState([]);
    const [loading, setLoading] = useState(true);

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
                setWeater(response.current);
                setTitle(Object.values(response.current.condition)[0]);
                setImgURL(Object.values(response.current.condition)[1]);
                setDaysWeater(response.forecast.forecastday);
                setLoading(false)
            })
            .catch(err => console.error(err));
    },[cityName])

    const values = {
        weater,setWeater,
        daysWeater, setDaysWeater,
        title, setTitle,
        imgURL, setImgURL,
        hours, setHours,
        loading, setLoading
    };

    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>;    
}

export const useWeater = () => useContext(WeaterContext);