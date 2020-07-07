import React, { useState, useRef } from 'react';
import DatePicker from './DatePicker'
import './Date.css'

function Date() {
  const initialState = 'none'
  const [hidden, setHidden] = useState(initialState)
  const modalRef = useRef(null);

  function toggleHidden() {
    if (hidden === 'none') {
      setHidden('')
    } else {
      setHidden('none')
    }
  }

  return (
    <>
      <div className='bg' style={{ display: hidden }} onClick={() => toggleHidden()}></div>
      <div>
        <button onClick={() => toggleHidden()}>Informe a data</button>
        <div style={{ display: hidden, position: 'absolute' }} ref={modalRef} className="Date">
          <DatePicker />
        </div>
      </div>
    </>
  );
}

export default Date;