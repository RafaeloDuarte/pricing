import React from 'react';
import './style.css'

function Menu({ menuOptions }) {
    return (
        <div className="menu">
            <ul className="topnav">
                {menuOptions.map((option,key) => (
                    <li key={key}>
                        <a href="#about">
                            {option}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;