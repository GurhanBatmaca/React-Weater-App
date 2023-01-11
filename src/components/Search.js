import { useCity } from '../context/CityContext';
import citysJson from '../data/citys.json';

const Search = () => {

  const { setCityName } = useCity();

    const onChangeOption = (event) => {
        if(event.target.value !== "select menu" ) {
          setCityName(event.target.value);
        };
    };

  return (
    <div className='container py-3'>
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
};

export default Search;