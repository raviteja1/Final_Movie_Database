import React from 'react';
import SpinnerIcon from '../layout/Spinner.gif'

function Spinner() {
    return (
        <div>
        <img
        src={SpinnerIcon}
        style={{width:'200px',margin:'auto',display:'block'}}
        alt="loading......."
        />
        </div>
    )
}

export default Spinner;
