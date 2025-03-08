import { CustomBackButton, CustomNextButton } from '@/_components/buttons'
import CustomInput, { CustomSelect } from '@/_components/input'
import { AccordionItem, QuestionContainer, QuestionLegend } from '@/_components/texts'
import VehicleTemplate from '../_components/VehicleTemplate'

function AboutYouPage() {
    return (
        <div>
            <VehicleTemplate label='Your details - About you'>
                <QuestionContainer className='border-y-0!'>
                    <QuestionLegend text='What’s your name?' className='pb-4!' />
                    <AccordionItem label='What if the title options don’t apply to me?' content="We understand that not everyone may identify with these titles. We are working to change this. For us to provide a comparison service, we ensure that the data gathered via the questions asked, matches that required by our partners. This includes selecting a title from these historic options. Unfortunately, these cannot be immediately changed as the data would not yet be recognised, resulting in insurance providers being unable to quote. For the time being, please select an option for you and any other people you tell us about. Your answer won't impact the prices or results displayed" />

                    <div className='mt-6'>
                        <QuestionLegend text='Title' className='text-base! pb-4!' />
                        <CustomSelect custom2ClassName='w-fit' />
                    </div>
                    <div className='mt-6'>
                        <QuestionLegend text='First name' className='text-base! pb-2!' />
                        <CustomInput containerClassName='w-[60%]!' />
                    </div>
                    <div className='my-6'>
                        <QuestionLegend text='Last name' className='text-base! pb-2!' />
                        <CustomInput containerClassName='w-[60%]!' />
                    </div>
                </QuestionContainer>




            </VehicleTemplate>

            <div className='flex items-center justify-between'>
                {/* <CustomLinkButton outlinebutton title='Back' /> */}
                <CustomBackButton />
                <CustomNextButton />
            </div>
        </div>)
}

export default AboutYouPage