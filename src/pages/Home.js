import Days from "../components/Days";
import Deatails from "../components/Deatails";
import Hours from "../components/Hours";
import { UseWeater } from "../context/WeaterContext"

const Home = () => {

  const { weater, city, text, imgURL } = UseWeater();

  return (
    <div className='home row'>

      <div className="col-md-8">
        <div className='today'>
          <div className='name'>
            <h3>{city}</h3>
            <p>{text}</p>
            <h2>{weater.temp_c}<sup>o</sup></h2>
          </div>
          <div className='img'>
            <img src={`${imgURL}`}/>
          </div>
        </div>

        <div >
          <Hours />
        </div>

        <div>
          <Deatails />
        </div>
      </div>

      <div className='col-md-4 days'>
        <Days />
      </div>
    </div>
  )
}

export default Home