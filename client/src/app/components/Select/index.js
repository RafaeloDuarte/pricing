import React, { memo } from 'react';
import './main.css'
// import { Container } from './styles';

function Select({ value, firstEl, list, toggle }) {
    return (
        <div className="box">
            <select value={value} onChange={toggle}>
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


export default memo(Select)