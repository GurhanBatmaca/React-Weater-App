import React from 'react'

const Search = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
      }

  return (
    <div>
        {/* <label>
          Pick your favorite flavor: */}
          <select >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        {/* </label> */}
        <form>
      <select  onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
    </div>
  )
}

export default Search;