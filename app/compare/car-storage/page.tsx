import React from 'react'
import VehicleTemplate from '../_components/VehicleTemplate'
import { QuestionContainer, QuestionLegend, QuestionSubLabel, RadioSelect } from '@/_components/texts'
import CustomButton, { CustomLinkButton } from '@/_components/buttons'

function CarStorage() {
    return (
        <div>
            <VehicleTemplate label='Car details - Car storage'>

                <QuestionContainer className='border-t-0! pt-0!'>
                    <QuestionLegend text='Where do you keep your car during the day?' className='pb-4!' />
                    <QuestionSubLabel text='If you leave your car in different places throughout the week, just tell us where the car’s kept most of the time.' className='mt-0! pt-0!' />

                    <div className='py-5'>
                        <RadioSelect labelText='At home' />
                        <RadioSelect labelText='Office or factory car park' />
                        <RadioSelect labelText='Open public car park' />
                        <RadioSelect labelText='Secure public car park' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0!'>
                    <QuestionLegend text='Where do you keep your car during the night?' className='pb-4!' />
                    <QuestionSubLabel text='If you leave your car in different places throughout the week, just tell us where the car’s kept most of the time.' className='mt-0! pt-0!' />

                    <div className='py-5'>
                        <RadioSelect labelText='Drive' />
                        <RadioSelect labelText='Street outside home' />
                        <RadioSelect labelText='Locked garage' />
                        <RadioSelect labelText='Unlocked garage' />
                    </div>
                </QuestionContainer>

            </VehicleTemplate>

            <div className='flex items-center justify-between'>
                <CustomLinkButton outlinebutton title='Back' />
                <CustomButton title='Next' />
            </div>
        </div>
    )
}

export default CarStorage