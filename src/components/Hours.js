import { useParams } from "react-router-dom";
import { useWeater } from '../context/WeaterContext';
import { useEffect } from "react";

const Hours = () => {

    const { index } = useParams();

    const { daysWeater, hours, setHours } = useWeater();

    useEffect(() => {
        daysWeater.forEach((item,i) => {
            if(i == index) {
                setHours(item.hour);
            };
        })
    },[index,hours]);

  return (
    <div className="row p-2">
        {
            hours.map((hour,ky) => (
               <div key={ky} className="card col-sm-2 bg-light pt-1">
                    <p> <i className="fa-regular fa-clock"></i> {`${hour.time}`.slice(11,16)}</p>
                    <p className="fs-4">{hour.temp_c}<sup>o</sup></p>
                    <p className={`card-title ${hour.condition.text == "Güneşli" && "text-warning" || hour.condition.text == "Açık" && "text-warning" || "text-danger" }`}>{hour.condition.text}</p>
                    <p>{hour.wind_kph} km/s <i className="fa-solid fa-wind"></i></p>
               </div>                
            ))
        }
    </div>
  );
};

export default Hours;