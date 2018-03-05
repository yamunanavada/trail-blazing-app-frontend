import React from 'react'

const CitySearch = (props) => {
  return (
    <div className="search-form">
      <form onSubmit={props.onCitySubmit}>
        <input type="text" id="citysearch" name="citysearch" placeholder="Search for a City..." onChange={props.onCityChange}/><br></br>
      </form>
    </div>

  )

}

export default CitySearch
