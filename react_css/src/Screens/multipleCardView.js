
import React from 'react'
import SingleCard from '../components/singleCard'
import { SingleCardView } from './SingleCardView'

const MultipleCard = () => {
    return (
        <div className='flex flex-col w-full h-auto gap-10 px-6 py-8 pl-20 pr-12 border-gray-300 shadow-md bg-blue-50'>
            <div className='flex items-start justify-end gap-20'>
                <SingleCardView />
                <SingleCard designation="Developer" Btnvalue="External Apply" />
            </div>
            <div className='flex items-start justify-end gap-20'>
                <SingleCard designation="Interaction Designer" Btnvalue="External Apply" />
                <SingleCard designation="SEO Analyst" Btnvalue="Apply Now" />
            </div>

        </div>
    )
}

export default MultipleCard