import React from 'react';
import { InputFeild } from '../components/inputFeild';
import Button from '../components/button';
import Text from '../components/text';
import { RadioButton } from '../components/radioButton';

export const JobCardSave = () => {
    return (

        <div className="flex flex-col h-full gap-6 p-8 bg-white border-gray-300 rounded-md shadow-md sm:w-2/3 lg:w-2/5">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <Text value={"Create a Job"} styles="text-xl font-normal font-poppins mb-2 md:mb-0" />
                <Text value="Step 2" styles="text-base font-medium font-poppins" />
            </div>

            <div className='flex justify-between gap-6 md:flex-row'>
                <InputFeild value="Location" placeholder={"Minimum"} />
                <InputFeild value="" placeholder={"Maximum"} />
            </div>
            <div className='flex justify-between gap-6 md:flex-row'>
                <InputFeild value="Salary" placeholder={"Minimum"} />
                <InputFeild value="" placeholder={"Maximum"} />
            </div>
            <div>
                <InputFeild value="Total Employee" placeholder={"ex.100"} />
            </div>

            <div>
                <Text value="Apply Type" styles="text-sm font-medium font-poppins" />
                <RadioButton />
            </div>

            <Button
                styles='bg-blue-500 w-16 h-10 rounded-md text-white ml-auto shadow-sm mt-20'
                text="Save"
            />
        </div>

    );
};
