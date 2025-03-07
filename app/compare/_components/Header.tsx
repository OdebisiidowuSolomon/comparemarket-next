import React from 'react'

function Header() {
    return (
        <div className='flex items-center flex-row mb-7'>
            <div className='flex items-center flex-row'>
                <div className='flex items-center flex-row'>
                    <div className='w-14 h-14 bg-gray-300 rounded-full'></div>
                    <div className='ml-2'>
                        <p className='text-baseColor text-2xl leading-5'><span className='font-bold'>compare</span> <br /><span className='font-bold'>the market</span></p>
                    </div>
                </div>
                <div className='p-4 border-l border-gray-300 ml-6 py-2'>
                    <p className='text-baseColor'>Car insurance</p>
                </div>
            </div>

            <div className='px-3 py-1 border-2 border-baseColor ml-auto rounded-4xl'>
                <span className='text-sm text-baseColor font-medium'>Your account</span>
            </div>

        </div>
    )
}

export default Header