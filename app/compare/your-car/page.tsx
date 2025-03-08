import React from 'react'
import VehicleTemplate from '../_components/VehicleTemplate'
import { AccordionItem, EditText, QuestionContainer, QuestionLegend, QuestionSubLabel, RadioSelect } from '@/_components/texts'
import { CustomSelect } from '@/_components/input'
import CustomButton, { CustomNextButton } from '@/_components/buttons'

function YourCarPage() {
    return (
        <div>
            <VehicleTemplate>

                <div className='pb-8 pt-0'>
                    <div className='flex items-center justify-between'>
                        <p className='text-baseColor text-xl font-medium'>2015 SUZUKI SWIFT SZ3 2WD (SJ15PUH)</p>
                        <EditText />
                    </div>
                    <p className='text-base mt-3'>1242cc, Petrol, 5DR, Hatchback, Manual</p>
                </div>

                <div className='py-7 border-y border-gray-300'>
                    <p className='text-baseColor text-xl font-medium'>Your car</p>
                    <p className='text-base mt-3'>We&apos;ve checked with an independent provider and filled in some details to save you time. Change anything that doesn’t look right.</p>
                </div>

                <QuestionContainer>
                    <QuestionLegend text='What type of alarm and/or immobiliser does the car have?' />
                    <QuestionSubLabel text='Check your car’s manual if you’re unsure' />

                    <div>
                        <RadioSelect labelText='Factory Fitted Thatcham Approved Alarm/Immobiliser' />
                        <RadioSelect labelText='Factory Fitted Thatcham Approved Alarm' />
                        <RadioSelect labelText='Factory Fitted Non-Thatcham Alarm/Immobiliser' />
                        <RadioSelect labelText='Factory Fitted Non-Thatcham Alarm' />
                    </div>

                </QuestionContainer>

                <QuestionContainer>
                    <QuestionLegend text='Is the car fitted with a tracking device?' />
                    <QuestionSubLabel text='Check your car’s manual if you’re unsure' />

                    <div>
                        <RadioSelect labelText='Yes' />
                        <RadioSelect labelText='No' />
                    </div>

                </QuestionContainer>


                <QuestionContainer>
                    <QuestionLegend text='Is the car an import?' />
                    <div>
                        <RadioSelect labelText='Yes' />
                        <RadioSelect labelText='No' />
                    </div>

                    <AccordionItem label='What’s an import?' content='Cars that are manufactured for sale outside the UK, then imported to the UK. Check your car’s log book if you’re unsure whether your car’s an import.' />

                </QuestionContainer>

                <QuestionContainer>
                    <QuestionLegend text='How many seats are there in the car?' />
                    <QuestionSubLabel text='Count the number of seatbelts if you’re unsure.' className='mb-4' />

                    <CustomSelect customClassName='pl-0!' custom2ClassName='w-[65%]' />

                </QuestionContainer>

                <QuestionContainer>
                    <QuestionLegend text='Has the car been modified in any way?' />
                    <QuestionSubLabel text='Modifications are changes to the car’s original specification. These can be mechanical, or cosmetic changes inside or outside the car.' />
                    <div>
                        <RadioSelect labelText='Yes' />
                        <RadioSelect labelText='No' />
                    </div>

                    <AccordionItem label='How can I find out if my car’s been modified?' content='Check any documents you inherited when you purchased the car. You can also speak to the insurance provider if you’re unsure.' />

                </QuestionContainer>


                <div className='py-7'>
                    <p className='text-baseColor font-medium text-xl'>Your car modifications</p>
                    <CustomButton title='Add a modification' outlinebutton className='ml-auto' />
                </div>

            </VehicleTemplate>

            <div className='flex justify-end'>
                <CustomNextButton />
            </div>

        </div>
    )
}

export default YourCarPage