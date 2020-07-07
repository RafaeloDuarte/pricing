import React from 'react';
import './index.css'

export default function Switch({option}) {
    return (
        <>
            <div className="center">
                <center><label className="label1">{option}</label></center>
                <center><input type="checkbox" /></center>
            </div>
        </>
    );
}
