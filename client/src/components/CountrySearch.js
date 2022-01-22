import React from "react";

const CountrySearch = ({setSelectedCountry, country, europe_data}) => {
    
    const searchForCountry = (searchValue) => {
            const search = searchValue.toLowerCase();
            const searchedCountry = europe_data.filter((search) => {
                return country.name.toLowerCase()
                })
            setSelectedCountry(searchedCountry)
    }
    
    return(
        <>
        <form>
    {/* <form onSubmit={handleSubmit}> */}
      <input
        // onChange={changeSearchValue}
        type="text"
        name="searchTerm"
        placeholder="Select Country"
         />
    </form>        </>
    )
}

export default CountrySearch;

//   const [searchValue, setSearchValue] = useState("");

//   const changeSearchValue = (event) => {
//     event.preventDefault();
//     setSearchValue(event.target.value);
//   }

//   useEffect(() => {
//     handleChange(searchValue);
//   }, [searchValue]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         onChange={changeSearchValue}
//         type="text"
//         name="searchTerm"
//         placeholder="Select Country"
//         value={searchValue} />
//     </form>
//   );
// }