import React from 'react'
import VehicleTemplate from '../_components/VehicleTemplate'
import { CustomSelect } from '@/_components/input'
import { QuestionLabel } from '@/_components/texts'
import CustomButton from '@/_components/buttons'

function YourCarModificationPage() {
    return (
        <div>
            <VehicleTemplate>
                <div>
                    <QuestionLabel text='What’s the category?' />
                    <CustomSelect customClassName='pl-0!' custom2ClassName='w-[65%]' />
                </div>
            </VehicleTemplate>
            <div className='flex justify-between items-center'>
                <CustomButton title='Back' outlinebutton />
                <CustomButton title='Next' />
            </div>
        </div>
    )
}

export default YourCarModificationPage