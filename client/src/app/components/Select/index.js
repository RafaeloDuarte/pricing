import React from 'react';
import './main.css'
// import { Container } from './styles';

export default function Select({ value, firstEl, list, toggle }) {
    return (
        <div className="box">
            <select value={value} onChange={e => toggle(e.currentTarget)}>
                <option>{firstEl}</option>
                {list && list.map(element =>
                    <option
                        key={element}
                        value={element}
                    >
                        {element}
                    </option>
                )}
            </select>
        </div>
    );
}
