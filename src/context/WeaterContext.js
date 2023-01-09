import { createContext,useContext,useState } from "react";

const WeaterContext = createContext();

export const WeaterProvider = ({children}) => {

    const [weater,setWeater] = useState({});
    const [daysWeater, setDaysWeater] = useState([]);
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");

    const values = {
        weater,setWeater,
        daysWeater, setDaysWeater,
        title, setTitle,
        imgURL, setImgURL
    };

    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>;    
}

export const useWeater = () => useContext(WeaterContext);