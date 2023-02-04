import { createContext, useContext, useState, useEffect } from "react";

const WeaterContext = createContext();

export const WeaterProvider = ( {children} ) => {

    const [weater, setWeater] = useState({});
    const [city, setCity] = useState("istanbul");
    const [cityInput,setCityInput] = useState("");
    const [text, setText] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [days, setDays] = useState([]);
    const [warning, setWarning] = useState(false);
    const [hours, setHours] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a04d3b9b0emsh5ec26dc7aeb22dbp1d91fdjsn303d514f2331',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=7&lang=tr`, options)
            .then(response => response.json())
            .then((response) => {
                setWeater(response.current);
                setText(Object.values(response.current.condition)[0]);
                setImgURL(Object.values(response.current.condition)[1]);
                setDays(response.forecast.forecastday);
                setHours(response.forecast.forecastday[0].hour)
                // console.log(response.current);
            })
            .catch(err => console.error(err));
    },[city])



    const values = {
        cityInput, setCityInput,
        city, setCity,
        weater, setWeater,
        text, setText,
        imgURL, setImgURL,
        days, setDays,
        hours, setHours,
        warning, setWarning
    };


    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>;
}

export const UseWeater = () => useContext(WeaterContext);