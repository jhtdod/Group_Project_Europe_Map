import React, {useEffect, useState} from "react";
import "./CountrySearch.css"

const CountrySearch = ({handleChange, filter, setFilter}) => {

  const [searchValue, setSearchValue] = useState("");

  const changeSearchValue = (event) => {
    setFilter(event.target.value);
  }

  const resetSearch = () => {
    setSearchValue('')
  }

    return(
    <div className="form">
    <h2>Or search for a country below</h2>
      <input
        onChange={changeSearchValue}
        type="text"
        name="searchValue"
        placeholder="Search For A Country"
      />    
    </div>
    )
}

export default CountrySearch;

