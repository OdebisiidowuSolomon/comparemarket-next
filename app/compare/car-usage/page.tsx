import { CustomBackButton, CustomNextButton, TextOnInput } from '@/_components/buttons'
import CustomInput from '@/_components/input'
import { AccordionItem, CheckboxSelect, QuestionContainer, QuestionLegend, QuestionSubLabel, RadioSelect } from '@/_components/texts'
import VehicleTemplate from '../_components/VehicleTemplate'

function CarUsagePage() {
    return (
        <div>
            <VehicleTemplate label='Car details - Car usage'>
                <QuestionContainer className='border-t-0!'>
                    <QuestionLegend text='When did you buy or start to lease this car?' className='pb-4!' />
                    <QuestionSubLabel text='You can find the ‘acquired vehicle on’ date in the V5C registration document, also known as the log book.' className='mt-0! pt-0!' />

                    <div>
                        <div className='flex items-center gap-5'>
                            <TextOnInput labelText='Month' />
                            <TextOnInput labelText='Year' />
                        </div>

                        <CheckboxSelect labelText="I don't have this car yet" selected />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0!'>
                    <QuestionLegend text='What do you use the car for?' className='py-4!' />

                    <RadioSelect labelText='Social use only' subtitle='Personal use such as shopping or visiting friends and family.' />
                    <RadioSelect labelText='Social use only' subtitle='Personal use such as shopping or visiting friends and family.' />
                    <RadioSelect labelText='Social use only' subtitle='Personal use such as shopping or visiting friends and family.' />

                </QuestionContainer>

                <QuestionContainer className='border-b-0!'>
                    <QuestionLegend text='What’s the annual personal mileage for this car?' className='py-4!' />
                    <QuestionSubLabel text='Try to be as accurate as possible. Underestimating your mileage could affect your cover or lead to increased charges.' />

                    <AccordionItem label='How can I calculate this?' content='As a guide, compare your mileage history on your most recent MOT(s). Or calculate how many miles you’re likely to drive per week, then multiply that by 52 to get your predicted annual mileage.' />
                    <CustomInput rightText='miles' />
                    <AccordionItem label='What’s personal mileage?' content='The miles you and any named driver will travel after everyday tasks such as shopping, meeting friends and family, and commuting to and from a single place of work.' />

                </QuestionContainer>
            </VehicleTemplate>

            <div className='flex items-center justify-between'>
                <CustomBackButton />
                <CustomNextButton />
            </div>
        </div>
    )
}

export default CarUsagePage