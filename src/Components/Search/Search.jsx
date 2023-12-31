import React from 'react';

import './Search.css';
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 className="title">
          Which vehicle you are look for?
        </h3>

        <div className="searchDiv grid">
          <input type="text" placeholder='Type'/>
          <input type="text" placeholder='Year'/>
          <input type="text" placeholder='Model'/>
          <input type="text" placeholder='Price'/>
          <button className='btn primaryBtn flex'>
            <AiOutlineSearch className='icon'/>
            <span>Search</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Search