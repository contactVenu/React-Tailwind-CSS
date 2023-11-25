import React from 'react'
import Button from './button'

export const RadioButton = () => {
    return (
        <div className='flex gap-4 mt-1'>
            <div className='flex justify-start gap-1'>
                <Button styles="w-5 h-5 border-2 border-gray-300 rounded-full" />
                <p className='text-sm font-normal text-gray-400 font-poppins'>Quick Apply</p>
            </div>
            <div className='flex justify-start gap-1'>
                <Button styles="w-5 h-5 border-2 border-gray-300 rounded-full" />
                <p className='text-sm font-normal text-gray-400 font-poppins'>External Apply</p>
            </div>

        </div>
    )
}
