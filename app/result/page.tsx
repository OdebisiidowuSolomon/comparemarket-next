import React from 'react'
import Header from '../compare/_components/Header'
import { FaAngleLeft } from 'react-icons/fa6'
import { COLORS } from '@/constants/colors'
import RightResult from './_component/RightResult'
import LeftResultFilter from './_component/LeftResultFilter'

function ResultPage() {
    return (
        <div className='mx-4 mt-7 md:mx-10 lg:mx-14 xl:mx-32 2xl:mx-72'>
            {/* // <div className='mx-72 md:mx-10 cmxl:mx-72 lg:mx-32 mt-7 2xl:bgre'> */}
            <Header />

            <div className='flex items-center gap-1'>
                <FaAngleLeft color={COLORS.green} />
                <span className='text-green underline font-bold'>Check your answers</span>
            </div>

            <p className='text-[15px] md:w-[45%] mt-5 mb-2'>The following quotes are for Kral Conomoh (policyholder) on a SUZUKI SWIFT SZ3 2WD (SJ15PUH) with Third Party Only cover starting on 8 April 2025.</p>

            <p className='text-green underline font-bold text-sm'>About these quotes and prices.</p>

            <div className='block md:hidden bg-white hover:bg-theme-surface-low border border-baseColor p-4 px-14 rounded-full flex justify-center mx-auto my-7'>
                <p className='font-semibold text-baseColor'>Filter results</p>
            </div>

            <div className='flex gap-5 mt-7'>
                <LeftResultFilter />
                <RightResult />
            </div>

        </div>

    )
}

export default ResultPage