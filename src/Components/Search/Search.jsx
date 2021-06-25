import React, { useState } from 'react'
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import logoSmall from '../Image/small.png'
import './Search.css'
import axios from "axios";
import { key,cx } from '../../Api';
import { Show } from '..';


const Search = (props) => {
    const [search,setSearch] = useState();
    const [result,setResult] = useState([]);
    const [info,setInfo] = useState("");

    const searchGoogle = async (e) => {
        e.preventDefault()
        await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${search}`)
        .then(response => {
            setResult(response.data.items) 
            setInfo(response.data.searchInformation) 
            console.log(response.data.items)
            console.log(response.data.searchInformation)
        }).catch(error => alert('You Have some error'));
    
    }

    return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src={logoSmall} alt="logo" />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle} >
            <input
              type="text"
              className="home__input"
              required
              onChange={(e) => setSearch(e.target.value)} 
              value={search}
            />

            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <Show result={result} info={info} />
    </div>
    )
}

export default Search
