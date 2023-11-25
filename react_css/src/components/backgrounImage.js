import React from 'react';
import { background_image } from '../asssets/images';

const BackgrounImage = () => {
    return (
        <div className='w-12 h-12 mr-2'
            style={{ backgroundImage: `url(${background_image})`, backgroundSize: 'cover', }}>
        </div>

    )
}

export default BackgrounImage