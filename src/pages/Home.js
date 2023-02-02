import Days from "../components/Days";
import Deatails from "../components/Deatails";
import Hours from "../components/Hours";
import { UseWeater } from "../context/WeaterContext"

const Home = () => {

  const { weater, city, text, imgURL } = UseWeater();

  return (
    <div className='home row p-2'>

      <div className="col-md-8 mb-2 left-side">
        <div className='today'>
          <div className='name'>
            <h3>{city.toUpperCase()}</h3>
            <p>{text}</p>
            <h2>{weater.temp_c}<sup>o</sup></h2>
          </div>
          <div className='img'>
            <img src={`${imgURL}`}/>
          </div>
        </div>

        < >
          <Hours />
        </>

        <>
          <Deatails />
        </>
      </div>

      < >
        <Days />
      </>
    </div>
  )
}

export default Home