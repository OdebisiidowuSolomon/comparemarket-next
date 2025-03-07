import React from 'react'
import VehicleTemplate from '../_components/VehicleTemplate'
import { AccordionItem, QuestionLegend, QuestionSubLabel } from '@/_components/texts'
import CustomButton from '@/_components/buttons'
import CustomInput from '@/_components/input'

function CarValuePage() {
    return (
        <div>
            <VehicleTemplate>
                <QuestionLegend text='What’s the current estimated value of the car?' className='pb-0!' />
                <QuestionSubLabel text="We've estimated your car's current market value using an independent provider. If a value isn’t shown or if it doesn’t look right, feel free to change it." />
                <QuestionSubLabel text="Estimated value of £4210." />

                <CustomInput className='my-5' />


                <AccordionItem content='In the event of a successful claim the insurance provider will generally pay out the market value of the car at the time of claim. Car values may vary due to a variety of factors such as modifications, mileage and the car’s condition.' />

            </VehicleTemplate>

            <div className='flex justify-between items-center'>
                <CustomButton title='Back' outlinebutton />
                <CustomButton title='Next' />
            </div>

        </div>
    )
}

export default CarValuePage