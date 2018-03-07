import React from 'react'

const SavedCitySearch = (props) => {
  return (
    <div className="profile-search-form">
      <h3>Advanced Search</h3>
      <form onSubmit={props.onCitySubmit}>
        <label for="citysearch">City </label>
        <input type="text" id="citysearch" name="citysearch" placeholder="Search for a City..." onChange={props.onCityChange}/><br></br>
        <label for="difficulty">Difficulty </label>
        <select className="select-box" type="text" id="difficulty" name="difficulty" onChange={props.onFilterChange} >
          <option value="">All Levels</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select><br></br>
        <label for="distance">Distance </label>
        <select className="select-box" type="text" id="distance" name="distance" onChange={props.onFilterChange}  >
          <option value="all">All Routes</option>
          <option value="short">Less than 3 miles</option>
          <option value="medium">3 to 6 miles</option>
          <option value="long">6 to 10 miles</option>
          <option value="superlong">Greater than 10 miles</option>
        </select>
      </form>

    </div>


  )

}

export default SavedCitySearch
