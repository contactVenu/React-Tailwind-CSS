import React from 'react';
import Text from './text';


export const InputFeild = ({ value, placeholder }) => {
    return (
        <div className='flex flex-col h-16 w-96'>
            <Text
                value={value ? value : <div className='h-5'></div>}
                styles="text-sm font-medium font-poppins" />
            <div className="w-full px-2 py-2 mt-1 border border-gray-300 rounded h-9">
                <p className='text-sm font-normal text-gray-400 font-poppins'>{placeholder}</p>
            </div>
        </div>
    )
}
