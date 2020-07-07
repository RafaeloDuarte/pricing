import React from 'react'
import './style.css'

function Header() {
    return (
        <div className="header">
            <a href="/" className="brand-logo">
                <span>
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsTZzj-qZq2I6hSO10-wzG8ja8zsa7Y1K97WPu-JWIv22h_8tM" />
                    <div className="profit-span">
                        <center>
                            <span>
                                <strong>P</strong>ROFIT+ 
                                <strong>I</strong>NTELLIGENCE 
                                <strong>P</strong>RICING 
                                <strong>S</strong>YSTEM
                            </span>
                        </center>
                    </div>
                </span>
            </a>
        </div>
    )
}

export default Header