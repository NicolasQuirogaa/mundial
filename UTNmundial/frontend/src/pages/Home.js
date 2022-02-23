import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/homeee.jpg';
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage:`url(${BannerImage})`}}>
            <div className='headerContainer'>
                <h1> QATAR 2022 </h1>
                <p> COPA MUNDIAL </p>
                <Link to='/selections'>
                 <button> Ingreso </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
