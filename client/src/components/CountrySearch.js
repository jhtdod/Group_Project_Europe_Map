import React, {useEffect, useState} from "react";
import "./CountrySearch.css"

const CountrySearch = ({handleChange}) => {

      const [searchValue, setSearchValue] = useState("");

  const changeSearchValue = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  }

  const resetSearch = () => {
    setSearchValue('')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    resetSearch()
  }

    return(
    <div className="form">
    <h2>Or search for a country below</h2>
    <form onSubmit={handleSubmit}>
      <input
        onChange={changeSearchValue}
        type="text"
        name="searchTerm"
        placeholder="Select A Country"
        value={searchValue}/>
    </form>        
    </div>
    )
}

export default CountrySearch;

