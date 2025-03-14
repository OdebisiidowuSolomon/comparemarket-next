import CustomButton from '@/_components/buttons'
import { CheckboxSelect, EditText, QuestionContainer, QuestionH2Text, QuestionLabel, TextBesideText } from '@/_components/texts'

function SummaryPage() {
    return (
        <div>
            <QuestionH2Text text='Check your answers' />
            <p>This information will be used by providers to calculate your quotes.</p>

            <p className='pt-5'>It’s really important to check it’s correct before you proceed, otherwise your insurance may not be valid, your provider could increase your premium or refuse to pay any claim you make.</p>


            <div>


                <QuestionContainer className='mt-7! pt-10!'>
                    <QuestionH2Text text='Car details' />

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Your car' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Car make and model' rightText='2015 SUZUKI SWIFT SZ3 2WD, 1242cc, Petrol, 5DR, Hatchback, Manual (SJ15PUH)' />
                        <TextBesideText leftText='Alarm/Immobiliser' rightText='Factory Fitted Thatcham Approved Alarm' />
                        <TextBesideText leftText='Tracking device' rightText='Yes' />
                        <TextBesideText leftText='Import' rightText='No' />
                        <TextBesideText leftText='Driver side' rightText='Right Hand' />
                        <TextBesideText leftText='Seats' rightText='5' />
                        <TextBesideText leftText='Modifications' rightText='Yes' />
                    </div>

                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Car value' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Current vehicle market value' rightText='£4210' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Car usage' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='When you bought the car' rightText='Not purchased yet' />
                        <TextBesideText leftText='Car usage' rightText='Social, domestic, pleasure and commuting (SDPC)' />
                        <TextBesideText leftText='Annual personal mileage' rightText='1000' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-y-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Car storage' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Daytime storage' rightText='Office or factory car park' />
                        <TextBesideText leftText='Nightime storage' rightText='Drive' />
                        <TextBesideText leftText='Car kept at home overnight' rightText='Yes' />
                    </div>
                </QuestionContainer>

            </div>


            <div>


                <QuestionContainer className='mt-7! pt-10!'>
                    <QuestionH2Text text='Your details' />

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='About you' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Name' rightText='Kral Conomoh' />
                        <TextBesideText leftText='Date of birth' rightText='11/09/1970' />
                        <TextBesideText leftText='Relationship status' rightText='Single' />
                    </div>

                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Your household' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Home address' rightText='12 sample street Lagos SW1A 1AA' />
                        <TextBesideText leftText='Homeowner' rightText='No' />
                        <TextBesideText leftText='Children under 16 living with you' rightText='No' />
                        <TextBesideText leftText='Lived in the UK since birth' rightText='Yes' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Car usage' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='When you bought the car' rightText='Not purchased yet' />
                        <TextBesideText leftText='Car usage' rightText='Social, domestic, pleasure and commuting (SDPC)' />
                        <TextBesideText leftText='Annual personal mileage' rightText='1000' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Your employment' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Employment status' rightText='Unemployed' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Your licence' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='Licence type' rightText='Full UK Car Licence' />
                        <TextBesideText leftText='Years licence held for' rightText='10 Years' />
                        <TextBesideText leftText='Additional driving qualifications' rightText='No' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Licence restrictions' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='DVLA reportable conditions' rightText='No' />
                        <TextBesideText leftText='Had insurance denied before' rightText='No' />
                        <TextBesideText leftText='Unspent non-motoring convictions' rightText='No' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Claims in the last 5 years' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='None' rightText='' />
                    </div>
                </QuestionContainer>

                <QuestionContainer className='border-t-0'>

                    <div className='flex items-center! justify-between mb-5'>
                        <QuestionLabel text='Motoring convictions in the last 5 years' className='pb-0!' />
                        <EditText />
                    </div>

                    <div>
                        <TextBesideText leftText='None' rightText='' />
                    </div>
                </QuestionContainer>

            </div>


            <QuestionContainer className='border-t-0'>
                <p className='text-[15px]'>If you’d like a copy of the summary above and more information about Compare the Market, you can either
                    {" "}<span className='font-bold text-green underline'>
                        download key details (desktop PDF)
                    </span>,
                    {' '}<span className='font-bold text-green underline'>
                        email key details
                    </span>
                    {" "}or
                    {' '}<span className='font-bold text-green underline'>
                        post key details
                    </span>.
                </p>
                <p className='mt-6 text-[15px]'>
                    You can also
                    {' '}<span className='font-bold text-green underline'>
                        Contact us
                    </span>{' '}
                    within 30 days to request the summary.
                </p>
            </QuestionContainer>

            <QuestionContainer className='border-t-0'>
                <QuestionLabel text="Let’s keep in touch" />
                <p className='text-[15px]'>You can change your contact preferences at any time in
                    {' '}<span className='font-bold text-green underline'>
                        Your account
                    </span>.
                </p>
            </QuestionContainer>

            <QuestionContainer className='border-t-0'>
                <QuestionLabel text="Terms and conditions" />
                <p className='text-[15px]'>
                    Please tick this box to confirm you have read and understood our website
                    {' '}<span className='font-bold text-green underline'>
                        Terms and conditions
                    </span>,
                    {' '}<span className='font-bold text-green underline'>
                        Privacy policy
                    </span>,
                    {' '}<span className='font-bold text-green underline'>
                        About us
                    </span>
                    {" "}and
                    {' '}<span className='font-bold text-green underline'>
                        Rewards terms and conditions
                    </span>.
                    {' '}If you do not understand any items within these documents please
                    {' '}<span className='font-bold text-green underline'>
                        Contact us
                    </span>.
                </p>
                <CheckboxSelect labelText='I agree' />
            </QuestionContainer>

            <div className='flex justify-end mt-7'>
                <CustomButton title='Get quotes'/>
            </div>

        </div>
    )
}

export default SummaryPage