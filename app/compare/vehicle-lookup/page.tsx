import CustomButton, { CustomLinkButton } from '@/_components/buttons'
import CustomInput from '@/_components/input'
import React from 'react'

function VehicleLookUpPage() {
    return (
        <div>
            <span className='font-bold'>Car details - Your car</span>
            <div className='my-8 py-8 border-y border-y-gray-300'>
                <p className='text-2xl text-baseColor'>What&apos;s your car&apos;s registration?</p>
                <p className='my-3'>We can only show you quotes for cars registered in the UK.</p>

                <CustomInput className='w-[45%] my-3' placeholder='Enter car registration...' />
                <CustomButton title='Find my car' className='my-3' />
                <p className='my-3'>Or</p>
                <CustomLinkButton title='Enter make and model' className='my-3' outlinebutton />
            </div>

            <HonestyIsTheBestPolicy />

        </div>
    )
}

export default VehicleLookUpPage


const HonestyIsTheBestPolicy = () => {
    return <div className='border border-baseColor p-4 rounded-lg'>
        <p className='font-bold mb-2'>Honesty&apos;s the best policy</p>
        <p>It&apos;s important you answer all questions honestly. Take care that the information you disclose throughout the quote is accurate and complete to the best of your knowledge. If you don’t do this, your insurance provider could increase your premium, cancel your policy, treat it as if it never existed, refuse a claim or not pay the claim in full.</p>
    </div>
}