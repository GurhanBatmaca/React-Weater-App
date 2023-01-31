import { UseWeater } from "../context/WeaterContext";

const Search = () => {

  const { city,setCity } = UseWeater();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(city)
  };

  const onInput = (e) => {
    setCity(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className='search'>
        <form onSubmit={onFormSubmit}>
          <input 
            onChange={ (e) => {setCity(e.target.value)}} 
            className="" placeholder='Search a City' value={city}>
              
            </input>
          <button type='submit' className='btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
  )
}

export default Search;