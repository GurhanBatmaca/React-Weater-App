import { UseWeater } from "../context/WeaterContext"

const Days = () => {

    const { days, setDays } = UseWeater();

    console.log(days);

  return (
    <div className='col-md-4 p-3'>
      <div className="p-3 days">
        <h4 className="text-center">3 Günlük Tahmin</h4>
        <>
          {
            days.map((day,index) => (
              <div className="day-container py-3"  key={index}>
                <div className="text-center" ><i className="fa-solid fa-calendar-days"></i> {day.date.slice(5,10).replaceAll("-",".")}</div>
                <div className="day py-3">
                  <div><i className="fa-sharp fa-solid fa-temperature-half"></i> {day.day.avgtemp_c}<sup>o</sup></div>
                  <div><img src={day.day.condition.icon} /></div>
                  <div><i className="fa-solid fa-cloud-rain"></i> %{day.day.daily_chance_of_rain}</div>
                </div>
              </div>
              
            ))
          }
        </>
      </div>
    </div>
  )
}

export default Days