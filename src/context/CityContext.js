import { createContext, useState, useContext } from "react";

const CityContext = createContext();

export const CityProvider = ( {children} ) => {

    const [cityName, setCityName] = useState("istanbul");

    const values = {
        cityName, setCityName
    };

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>   
};

export const useCity = () => useContext(CityContext);
