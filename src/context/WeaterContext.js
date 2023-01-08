import { createContext,useContext,useState } from "react";

const WeaterContext = createContext();

export const WeaterProvider = ({children}) => {

    const [weater,setWeater] = useState({});

    const values = {
        weater,setWeater
    };

    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>;    
}

export const useTest = () => useContext(WeaterContext);