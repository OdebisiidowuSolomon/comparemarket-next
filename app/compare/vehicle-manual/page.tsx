import React from 'react'
import VehicleTemplate from '../_components/VehicleTemplate'
import { AccordionItem } from '@/_components/texts'
import { CustomSelect } from '@/_components/input'
import CustomButton, { CustomLinkButton } from '@/_components/buttons';

function VehicleManualPage() {

    return (
        <div>
            <VehicleTemplate>
                <div className='ml-3'>
                    <p className='text-[21px] text-baseColor'>Tell us about your car</p>
                    <AccordionItem label='Can I get a quote for older cars?' content='We can’t provide quotes for vehicles manufactured before 1970.' />
                </div>

                {/* <CustomSelect /> */}
                <CustomSelect error />
                <CustomSelect disabled />
                <CustomSelect disabled />
                <CustomSelect disabled />
                <CustomSelect disabled />
                <CustomSelect disabled />
            </VehicleTemplate>

            <div className='flex justify-between'>
                <CustomLinkButton title='Back' outlinebutton />
                <CustomButton title='Save car' />
            </div>
        </div>
    )
}

export default VehicleManualPage