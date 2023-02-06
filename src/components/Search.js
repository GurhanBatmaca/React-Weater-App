import { UseWeater } from "../context/WeaterContext";

const Search = () => {

  const { cityInput, setCityInput, setCity, warning, setWarning, setLoading } = UseWeater();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(cityInput === "") {
        setWarning(true)
        setTimeout(() => {
          setWarning(false);
        },2000)
        return;    
    } 
    setCity(cityInput);
    setCityInput("");
    setLoading(true);
   
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
        {warning && <span class="bg-warning warning">Lütfen bir şehir adı girin</span>}
    </div>
  )
}

export default Search;