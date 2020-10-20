import React, { useState } from 'react';

const UseStateHook = () => {

  const [color, setColor] = useState('white')
  const [fontSize, setFontSize] = useState(14)

  const styleButton = ({ padding: '10px', backgroundColor: 'white', fontSize: `${fontSize}px` })

  return (
    <fieldset>
      <legend>Demonstration work 'useState' hook in function component.</legend>
      <div style={{ padding: '20px', backgroundColor: color }}>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => { setColor('white') }} style={styleButton}>White</button>
            <button onClick={() => { setColor('black') }} style={styleButton}>Dark</button>
          </div>
          <div className="col-md-6">
            <button onClick={() => { setFontSize((fs) => fs + 2) }} style={styleButton}>+</button>
            <button onClick={() => { setFontSize((fs) => fs - 2) }} style={styleButton}>-</button></div>
        </div>
      </div>
    </fieldset>

  )
}

export default UseStateHook;