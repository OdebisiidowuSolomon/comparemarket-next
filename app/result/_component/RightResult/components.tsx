import CustomButton from '@/_components/buttons'
import { COLORS } from '@/constants/colors'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoMdInformationCircle } from 'react-icons/io'

export function ResultQuotePriceCard() {
    return (
        <div className='border border-gray-500 rounded-2xl mb-7'>

            <div className='flex border-b border-gray-300 flex-col sm:flex-row md:flex-col lg:flex-row'>
                <div className="flex flex-[0.65] flex-col lg:flex-row">
                    <ResultQuotePriceCardLeftPart />
                    <ResultQuotePriceCardMiddlePart />
                </div>
                <ResultQuotePriceCardRightPart />

            </div>

            <div className='flex items-center px-3 pb-7 pt-3 flex-col-reverse my-4 lg:my-0 lg:flex-row'>
                <div className='flex items-center gap-2'>
                    <div className='flex-[0.4]'>
                        <IoMdInformationCircle size={28} color={COLORS.baseColor} />
                    </div>
                    <p className='text-sm grow'>Rated Excellent on Reviews.io with 345,000 Reviews, Free Breakdown & legal included!

                        <span className='text-green underline font-bold ml-1'>Read More</span>
                    </p>
                </div>

                <CustomButton title='More details' className='mb-5 lg:mb-0 lg:ml-auto' />
                {/* <div className='p-3 bg-red-500 flex justify-end'>
                </div> */}
            </div>

        </div>
    )
}
// export function ResultQuotePriceCard() {
//     return (
//         <div className='border border-gray-500 h-[400px]l rounded-2xl mb-7'>

//             <div className='flex border-b border-gray-300'>

//                 <ResultQuotePriceCardLeftPart />
//                 <ResultQuotePriceCardMiddlePart />
//                 <ResultQuotePriceCardRightPart />

//             </div>

//             <div className='flex items-center px-3 pb-7 pt-3'>
//                 <div className='flex items-center gap-2'>
//                     <IoMdInformationCircle size={28} color={COLORS.baseColor} />
//                     <p className='text-sm'>Rated Excellent on Reviews.io with 345,000 Reviews, Free Breakdown & legal included!

//                         <span className='text-green underline font-bold ml-1'>Read More</span>
//                     </p>
//                 </div>

//                     <CustomButton title='More details' className='ml-auto' />
//                 {/* <div className='p-3 bg-red-500 flex justify-end'>
//                 </div> */}
//             </div>

//         </div>
//     )
// }



const ResultQuotePriceCardLeftPart = () => {
    // return <div className="flex-[0.45] bg-red-7001 flex items-start gap-3 p-3 border-r border-gray-300">
    return <div className="flex-[0.69] bg-red-7001 flex items-start gap-3 p-3 border-r border-gray-300">
        <Image src={'/itd5.webp'} alt='' width={97} height={60} />
        <div className='bg-theme-surface-highlighted p-3 rounded-md'>
            <div>
                <div className="flex justify-between items-center">
                    <span className='text-[12px]'>Monthly x 11</span>
                    <span className='text-2xl font-semibold'>£213.16</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='text-[12px]'>Deposit</span>
                    <span className='text-xl font-semibold'>£2093.53</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='text-[12px]'>Total</span>
                    <span className='text-xl font-semibold'>£4438.29</span>
                </div>
            </div>
            <div className='border-t border-gray-400'>
                <span className='text-[12px]'>Or pay annually for £4187.06 and save £251.23</span>
            </div>
        </div>
    </div>
}


const ResultQuotePriceCardMiddlePart = () => {
    // return <div className="flex-[0.2] bg-yellow-7001 p-3 border-r border-gray-300">
    return <div className="flex-[0.31] bg-yellow-7001 p-3 border-r border-gray-300">
        <p className='text-lg'>Excess</p>

        <div className='p-3 bg-theme-surface-low rounded-md mt-3'>
            <p className='text-[15px]'>£0 voluntary</p>
            <p className='text-[15px] my-1'>£200 compulsory</p>
            <p className='text-[15px] font-bold'>£200 total</p>
        </div>
    </div>

}

const ResultQuotePriceCardRightPart = () => {
    return <div className="flex-[0.35] bg-green-7001 p-3">
        <p className='text-lg'>Additional products</p>

        <div className='p-3 bg-theme-surface-low rounded-md mt-3'>
            <ResultQuotePriceCardRightPartItem />
            <ResultQuotePriceCardRightPartItem />
            <ResultQuotePriceCardRightPartItem />
            <ResultQuotePriceCardRightPartItem isLastItem />
        </div>
    </div>
}

const ResultQuotePriceCardRightPartItem = ({ isLastItem }: { isLastItem?: boolean }) => {
    return <div className={`flex items-center gap-4 py-2 ${isLastItem ? '' : 'border-b border-b-gray-300'}`}>
        <FaCheck size={18} color={COLORS.green} />
        <div>
            <p className='text-sm'>Courtesy Car</p>
            <span className='text-[12px]'>Included as standard</span>
        </div>
    </div>
}