import { AccordionItem, CheckMarkText, EditText, SuccessMessage } from '@/_components/texts'
import VehicleTemplate from '../_components/VehicleTemplate'
import CustomInput from '@/_components/input'
import CustomButton from '@/_components/buttons'

function EmailPage() {
    return (
        <div>
            <VehicleTemplate>
                <SuccessMessage />

                <div className='py-8'>
                    <div className='flex items-center justify-between'>
                        <p className='text-baseColor text-xl font-medium'>2015 SUZUKI SWIFT SZ3 2WD (SJ15PUH)</p>
                        <EditText />
                    </div>
                    <p className='text-base mt-3'>1242cc, Petrol, 5DR, Hatchback, Manual</p>
                </div>

                <div className='pt-7 border-t border-gray-300'>
                    <p className='text-baseColor text-lg font-medium'>Enter your email</p>
                    <div className='mt-4'>
                        <CheckMarkText />
                        <CheckMarkText />
                    </div>


                    <div className='mt-4'>
                        <CustomInput className='w-[60%]' />
                        <AccordionItem label='Why are you asking this?' content='We can check if you have an account, if you do, you can sign in to get quotes faster. The insurance provider can also send you confirmation of your policy when you buy. If you opt-in to receive emails from us, we’ll send you those too.' />
                    </div>

                </div>

            </VehicleTemplate>

            <div>
                <CustomButton title='Next' className='ml-auto' />
            </div>
        </div>
    )
}

export default EmailPage