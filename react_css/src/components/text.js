import React from 'react';

const Text = ({ value, styles }) => {
    return (
        <p className={`text ${styles}`}>
            {value}
        </p>
    );
}

export default Text;
