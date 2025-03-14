import CustomButton from '@/_components/buttons'
import { CheckboxSelect, RadioSelect, UnderlineText } from '@/_components/texts'
import React from 'react'

function LeftResultFilter() {
    return (
        <div className='md:flex-[0.3] lg:flex-[0.2] hidden md:block border border-gray-500 rounded-2xl p-3 h-fit'>
        {/* <div className='flex-[0.2] hidden md:block border border-gray-500 rounded-2xl p-3 h-fit'> */}
            <p className='text-xl font-semibold'>Filters</p>


            <LeftResultFilterSection>
                <LeftResultFilterLabel text='Minimum level of cover' />
                <p className='text-[13px]'>Comprehensive cover can cost less than third party or third party fire and theft.</p>
                <UnderlineText text='What does this mean?' className='mt-3' />

                <div className='mt-5'>
                    <RadioSelect labelText='Comprehensive' size='medium' />
                    <RadioSelect labelText='Third Party Fire and Theft' size='medium' />
                    <RadioSelect labelText='Third Party Only' size='medium' />
                </div>

            </LeftResultFilterSection>

            <LeftResultFilterSection>
                <LeftResultFilterLabel text='Additional products' />
                <UnderlineText text='What are additional products?' className='mt-3' />

                <div className='mt-5'>
                    <CheckboxSelect labelText='Personal accident cover' size='medium' />
                    <CheckboxSelect labelText='Courtesy car' size='medium' />
                    <CheckboxSelect labelText='Breakdown cover' size='medium' />
                    <CheckboxSelect labelText='Motor legal protection' size='medium' />
                </div>

            </LeftResultFilterSection>

            <LeftResultFilterSection>
                <LeftResultFilterLabel text='Show telematics policies' />
                <p className='text-[13px]'>Your provider may need to install a tracking device to your vehicle and you may also have to install a smartphone app.</p>
                <UnderlineText text='What is the benefit of telematics?' className='mt-3' />

                <div className='mt-5'>
                    <RadioSelect labelText='Yes' size='medium' />
                    <RadioSelect labelText='No' size='medium' />
                </div>

            </LeftResultFilterSection>


            <div>
                <CustomButton title='Apply' className='w-full flex justify-center my-5' />
                <CustomButton title='Cancel' className='w-full flex justify-center' outlinebutton />
            </div>

        </div>
    )
}

export default LeftResultFilter



const LeftResultFilterLabel = ({ text, className }: { text: string, className?: string }) => {
    return <p className={`text-[15px] font-semibold ${className}`}>{text}</p>
}

const LeftResultFilterSection = ({ children }: { children: React.ReactNode }) => {
    return <div className='mt-5 border-b border-b-gray-400'>
        {children}
    </div>
}