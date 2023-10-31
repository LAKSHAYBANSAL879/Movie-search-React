import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CSS import
import './Navbar.css';

// Context import
import ThemeContext from '../../context/ThemeContext';

// Component import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
   

    const {theme, setTheme} = useContext(ThemeContext);

    function updateTheme() {
        if(theme == 'dark') {
            setTheme('light');
            localStorage.setItem('app-theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('app-theme', 'dark');
        }
    }

   
    return (
        <div className="navbar-wrapper">
            <div className="movie-base-title"><Link to="/">MovieGO</Link></div>
            <div className='movie-para'>Find Your Favourite Movie</div>
           
            <div onClick={updateTheme}>
                <FontAwesomeIcon className='theme-icon' icon={(theme == 'dark') ? faSun : faMoon} />
            </div>
        </div>
    )

}

export default Navbar;
