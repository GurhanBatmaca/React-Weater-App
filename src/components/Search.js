import { UseWeater } from "../context/WeaterContext";

const Search = () => {

  const { cityInput, setCityInput, setCity } = UseWeater();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setCityInput("");
  };

  return (
    <div className='search'>
        <form onSubmit={onFormSubmit}>
          <input 
            onChange={ (e) => {setCityInput(e.target.value)}} 
            className="" placeholder='Search a City' value={cityInput}>              
          </input>
          <button type='submit' className='btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
  )
}

export default Search;