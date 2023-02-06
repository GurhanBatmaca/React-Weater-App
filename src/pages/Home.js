import Days from "../components/Days";
import Deatails from "../components/Deatails";
import Hours from "../components/Hours";
import Search from "../components/Search";
import Today from "../components/Today";
import { UseWeater } from "../context/WeaterContext";

const Home = () => {

  const { loading } = UseWeater();

  return (
    <div className='home row p-2'>

      {
        loading ? <div className="text-center loading-area"><i className="fa-solid fa-spinner fa-spin-pulse fa-2x"></i><span className="loading-text"> Yükleniyor...</span></div> :
        <>
          <Search />

          <div className="col-md-8  left-side">
            <div className="p-3">
              <Today />
              <Hours />
              <Deatails />
            </div>
          </div>

          <Days />
        </>
      }

    </div>
  )
}

export default Home;