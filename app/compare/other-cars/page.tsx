import React from 'react'
import VehicleTemplate from '../_components/VehicleTemplate'
import { QuestionContainer, QuestionLegend, QuestionSubLabel, RadioSelect } from '@/_components/texts'
import { CustomSelect } from '@/_components/input'
import CustomButton, { CustomLinkButton } from '@/_components/buttons'

function OtherCarPage() {
    return (
        <div>
            <VehicleTemplate label='Car details - Other cars'>
                <QuestionContainer className='border-t-0!'>
                    <QuestionLegend text='How many cars are kept at your household (including this one)?' className='pb-4!' />
                    <QuestionSubLabel text='Exclude motorbikes, vans, and commercial vehicles.' className='mt-0! pt-0!' />

                    <div className='mt-6'>
                        <CustomSelect />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-y-0!'>
                    <QuestionLegend text='Do you use any other vehicles?' className='py-4!' />

                    <RadioSelect labelText='Yes' />
                    <RadioSelect labelText='No' />

                </QuestionContainer>

                
            </VehicleTemplate>

            <div className='flex items-center justify-between'>
                <CustomLinkButton outlinebutton title='Back' />
                <CustomButton title='Next' />
            </div>
        </div>
    )
}

export default OtherCarPage