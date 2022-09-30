import React from "react";

const SearchBar = ({ searchChange }) => {
    return (
        <div className = "searchBar">
            <input 
            type= 'search' 
            placeholder='search employee'
            onChange={searchChange} 
            />
        </div>
    );
}


export default SearchBar;