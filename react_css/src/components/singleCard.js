import React from 'react';
import BackgrounImage from './backgrounImage';
import Jobdetails from './singleCardMaker';
const SingleCard = ({ designation, Btnvalue }) => {
    return (
        <div className='flex-col items-stretch w-3/5 gap-10 px-6 py-4 bg-white border-gray-300 shadow-md h-80 rounded-xl'>
            <div className='flex '>
                <BackgrounImage />
                <Jobdetails designation={designation}
                    company='Great Vibes - Information Technology'
                    address="Chennai, Tamilnadu, India (In-office)"
                    timing="Part-Time (9.00 am - 5.00 pm IST)"
                    experience="Experience (1 - 2 years)"
                    salary="INR (₹) 30,000 - 50,000 / Month"
                    totalEmployee="51-200 employees"
                    Btnvalue={Btnvalue}
                />

            </div>

        </div>

    )
}

export default SingleCard;