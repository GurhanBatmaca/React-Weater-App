import { UseWeater } from "../context/WeaterContext";

const Hours = () => {

    const { hours } = UseWeater();
    const newHours = hours.filter((hour,index) => {
        if(index == 6 || index == 9 || index == 12 || index == 15|| index == 18|| index == 21 ) {
            return hour;
        }
    });

  return (
    <div className="hours row row-cols-3 row-cols-md-6 text-center mb-2 p-3">
        {
            newHours.map((hour,index) => (
                <div className="col hour" key={index}>
                    <div className="hour-item"><i className="fa-regular fa-clock"></i> {hour.time.slice(11,16)}</div>
                    <div className="hour-item temp">{hour.temp_c}<sup>o</sup></div>
                    <div className="hour-item"><img src={`${hour.condition.icon}`}/></div>
                </div>
            ))
        }
    </div>

  )
}

export default Hours;