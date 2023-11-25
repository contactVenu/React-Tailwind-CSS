import React from 'react';
import { InputFeild } from '../components/inputFeild';
import Text from '../components/text';
import Button from '../components/button';

export const JobCardNext = () => {
    return (
        <div className="flex flex-col h-full gap-6 p-8 bg-white border-gray-300 rounded-md shadow-md sm:w-2/3 md:w-1/2 lg:w-2/5">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <Text value={"Create a Job"} styles="text-xl font-normal font-poppins mb-2 md:mb-0" />
                <Text value="Step 1" styles="text-base font-medium font-poppins" />
            </div>
            <InputFeild value="Job Title" placeholder={'ex. UX UI Designer'} />
            <InputFeild value="Company Name" placeholder={"ex. Google"} />
            <InputFeild value="Industry" placeholder={"ex. Information Technology "} />

            <div className='flex w-full gap-6'>
                <InputFeild value="Location" placeholder={"ex. Chennai"} />
                <InputFeild value="Remote Type" placeholder={"ex. In-office"} />
            </div>

            <Button
                styles='bg-blue-500 w-16 h-10 rounded-md text-white ml-auto shadow-sm mt-20'
                text="Next"
            />
        </div>

    );
};
