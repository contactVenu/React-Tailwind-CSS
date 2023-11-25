import React from 'react';

const Button = ({ text, styles }) => {

    return (
        <div className='flex '>
            <button
                className={`text ${styles}`}
            >
                {text}
            </button>
        </div>

    );
};

export default Button;
