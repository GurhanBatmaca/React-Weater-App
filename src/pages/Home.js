import Days from "../components/Days";
import Deatails from "../components/Deatails";
import Hours from "../components/Hours";
import Today from "../components/Today";

const Home = () => {

  return (
    <div className='home row p-2'>

      <div className="col-md-8  left-side">
        <div className="p-3">
          <Today />
          <Hours />
          <Deatails />
        </div>
      </div>

      <Days />

    </div>
  )
}

export default Home;