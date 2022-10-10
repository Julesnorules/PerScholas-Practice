import React from "react";

const SearchBar = ({ searchChange }) => {
    return (
        <div className = "searchBar">
            <input type= 'search' placeholder= 'Search Employee D'
            onChange={searchChange} 
            />
        </div>
    );
}


export default SearchBar;