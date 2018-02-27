import React from 'react'

const CitySearch = () => {

  return (
    <div className="search-form">
      <h3>Search for a City</h3>
      <form>
        <label for="citysearch">City </label>
        <input type="text" id="citysearch" name="citysearch" placeholder="City..." /><br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  )

}

export default CitySearch
