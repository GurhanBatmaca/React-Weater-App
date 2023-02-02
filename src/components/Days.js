import { UseWeater } from "../context/WeaterContext"

const Days = () => {

    const { days, setDays } = UseWeater();

    console.log(days);

  return (
    <div className='col-md-4 days p-2'>
      <h4>3 Günlük Tahmin</h4>
      <>
        {
          days.map((day,index) => (
            <div className="day" key={index}>
              <div >{day.date.slice(5,10).replaceAll("-",".")}</div>
              <div>{day.day.avgtemp_c}<sup>o</sup></div>
              <div><img src={day.day.condition.icon} /></div>
            </div>
            
          ))
        }
      </>
    </div>
  )
}

export default Days