import { UseWeater } from "../context/WeaterContext";

const Today = () => {

    const { weater, city, text, imgURL } = UseWeater();

  return (

    <div className='today p-3 mb-2'>
        <div>
            <h3 className='name'>{city.toUpperCase()}</h3>
            <p className='desc'>{text}</p>
            <h2 className='temp'>{weater.temp_c}<sup>o</sup></h2>
        </div>
        <div className='img'>
            <img src={`${imgURL}`}/>
        </div>
    </div>

  )
}

export default Today;