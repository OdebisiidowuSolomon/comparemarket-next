import CustomButton, { CustomBackButton, CustomNextButton } from '@/_components/buttons'
import CustomInput from '@/_components/input'
import { AccordionItem, QuestionContainer, QuestionLegend, QuestionSubLabel, RadioSelect, Text3 } from '@/_components/texts'
import VehicleTemplate from '../_components/VehicleTemplate'

function YourHouseHoldPage() {
    return (
        <div>
            <VehicleTemplate label='Your details - Your household'>
                <QuestionContainer className='border-t-0!'>
                    <QuestionLegend text='What’s your address?' className='pb-4!' />

                    <div>
                        <Text3 text='House number or name (optional)' />
                        <CustomInput />
                    </div>
                    <div className='my-5'>
                        <Text3 text='House number or name (optional)' />
                        <CustomInput />
                    </div>

                    <CustomButton title='Find address' />

                    <p className='my-4'>Or</p>

                    <p className='font-bold text-green underline'>Enter the full address yourself</p>

                </QuestionContainer>

                <QuestionContainer className='border-t-0'>
                    <QuestionLegend text='Do you own your home?' className='py-4!' />

                    <RadioSelect labelText='Yes' />
                    <RadioSelect labelText='No' />

                </QuestionContainer>

                <QuestionContainer className='border-t-0!'>
                    <QuestionLegend text='Do any children under the age of 16 live with you?' className='py-4!' />

                    <RadioSelect labelText='Yes' />
                    <RadioSelect labelText='No' />

                    <AccordionItem content='Insurance providers need to know this to get an accurate picture of you and find quotes that suit your needs.' />

                </QuestionContainer>

                <QuestionContainer className='border-y-0!'>
                    <QuestionLegend text='Have you continuously lived in the UK since birth?' className='py-4!' />
                    <QuestionSubLabel text='Insurance providers need to know how long you’ve lived in the UK on a continuous basis, without any breaks lasting 6 months or longer.' className='mb-4' />

                    <RadioSelect labelText='Yes' />
                    <RadioSelect labelText='No' />


                </QuestionContainer>


            </VehicleTemplate>

            <div className='flex items-center justify-between'>
                <CustomBackButton />
                {/* <CustomButton title='Next' /> */}
                <CustomNextButton />
            </div>
        </div>
    )
}

export default YourHouseHoldPage