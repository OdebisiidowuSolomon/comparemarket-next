import React from 'react'

function VehicleTemplate({
    children,
    error,
    label
}: Readonly<{
    children: React.ReactNode;
    error?: boolean
    label?: string
}>) {
    return (
        <>
            <span className='font-bold mb-4 hidden md:block'>{label || 'Car details - Your car'}</span>
            <div className='mb-8 md:my-8 md:py-8 md:pb-6 border-y border-y-gray-300'>
                {children}
            </div>
            {error && <div className='p-5 border-3 border-red-800 rounded-lg mb-8'>
                <p className='font-bold text-sm mb-4'>This section has 1 incomplete question</p>
                <p className='font-bold text-sm text-green underline'>Go to the question</p>
            </div>}
        </>
    )
}

export default VehicleTemplate