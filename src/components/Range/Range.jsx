import React, {useState} from 'react';

function Range() {
    const increment = () => setValue(value +  1)
    const decrement = () => {
        setValue(value - 1)
        value <= 0?setValue(0):""
    }
    const rangeInput = {
        maxWidth:"650px"
    }
    const [value, setValue] = useState(0)
    return (
        <>
            <h3>{value}</h3>
            <input type="range" className="form-range mb-5" style={rangeInput} id="customRange3" value={value} min="0" max="100" />{/*defaultValue*/}
            <br/>
            <button type="button" className='btn btn-success me-md-2' onClick={increment}>increment</button>
            <button type="button" className='btn btn-danger me-md-2' onClick={decrement}>decrement</button>
        </>
    );
}

export default Range;