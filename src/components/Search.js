import { useCity } from '../context/CityContext';
import citysJson from '../data/citys.json';

const Search = () => {

  const { cityName, setCityName } = useCity();

    const onChangeOption = (event) => {
        if(event.target.value != "select menu" ) {
          console.log(event.target.value);
          setCityName(event.target.value);
        };
    };

  return (
    <div>
      <form>
        <select className='form-select' onChange={onChangeOption}>
        <option defaultValue={"selected"}>Bir şehir seç</option>
        {
          citysJson.map((city) => (

            <option value={city.name} key={city.id}>{city.name}</option>
          ))
        } 
        </select>
      </form>
    </div>
  )
}

export default Search;