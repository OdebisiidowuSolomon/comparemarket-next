import { CustomBackButton, CustomNextButton } from '@/_components/buttons'
import { CustomSelect } from '@/_components/input'
import { QuestionLabel } from '@/_components/texts'
import VehicleTemplate from '../_components/VehicleTemplate'

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
                <CustomBackButton />
                {/* <CustomButton title='Next' /> */}
                <CustomNextButton />
            </div>
        </div>
    )
}

export default YourCarModificationPage