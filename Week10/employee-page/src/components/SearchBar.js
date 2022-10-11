import React from "react";

const SearchBar = ({ searchChange }) => {
    return (
        <div>
            <input className = "searchBar" type= 'search' placeholder= 'Search Employee'
            onChange={searchChange} 
            />
        </div>
    );
}


export default SearchBar;