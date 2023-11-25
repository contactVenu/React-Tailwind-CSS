import React from 'react'
import Text from './text';
import Button from './button';

const SingleCardMaker = ({ designation, company, address, timing, experience, salary, totalEmployee, Btnvalue }) => {
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <Text value={designation} styles="text-2xl font-normal font-poppins" />
                <Text value={company} styles="text-base font-normal font-poppins" />
                <Text value={address} styles="text-base text-gray-500 font-normal font-poppins" />
            </div>
            <div className='flex flex-col gap-2'>
                <Text value={timing} styles="text-base text-gray-700 font-normal font-poppins" />
                <Text value={experience} styles="text-base text-gray-700 font-normal font-poppins" />
                <Text value={salary} styles="text-base text-gray-700 font-normal font-poppins" />
                <Text value={totalEmployee} styles="text-base text-gray-700 font-normal font-poppins" />

            </div>
            <Button styles={
                Btnvalue === "Apply Now" ?
                    'bg-blue-500 w-24 h-10 rounded-md text-white shadow-sm' : "bg-whiten w-36 h-10 rounded-md text-blue-500 border-2 border-blue-500"
            }

                text={Btnvalue} />
        </div>
    )
}

export default SingleCardMaker;