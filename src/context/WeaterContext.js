import { createContext, useContext, useState } from "react";

const WeaterContext = createContext();

export const WeaterProvider = ( {children} ) => {

    const [weater, setWeater] = useState([]);
    const [city, setCity] = useState("istanbul");

    const values = {
        weater, setWeater,
        city, setCity
    };


    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>;
}

export const UseWeater = () => useContext(WeaterContext);