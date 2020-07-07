import React from 'react'
import Header from './Header'
import './style.css';

function Base({ Component }) {
    return (
        <div>
            <Header />
            <div>
                {Component}
            </div>
        </div>
    )
}

export default Base