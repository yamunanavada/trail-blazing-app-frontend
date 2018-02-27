import React from 'react'

const CitySearch = (props) => {
  return (
    <div className="search-form">
      <h3>Search for a City</h3>
      <form onSubmit={props.onCitySubmit}>
        <label for="citysearch">City </label>
        <input type="text" id="citysearch" name="citysearch" placeholder="City..." onChange={props.onCityChange}/><br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  )

}

export default CitySearch
