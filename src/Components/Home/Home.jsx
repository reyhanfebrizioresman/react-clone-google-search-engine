import React,{useState} from 'react'
import Logo from '../Image/googleLogo.png'
import {FaSistrix} from 'react-icons/fa'
import './Home.css'
import { useParams } from 'react-router-dom'
const Home = (props) => {

    const [search,setSearch] = useState('');

    const searchGoogle = e => {
        props.history.push({ pathname: "/search"});
    }
    
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-logo">
                    <img src={Logo} alt="/images/logoGoogle" />
                </div>
                <form action="" className="home-form" onSubmit={searchGoogle}>
                    <div className="home-group">
                        <input type="text" className="home-input" onChange={(e) => setSearch(e.target.value)} value={search}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
