'use client'

import { ProgressBar } from './_components';
import VerticalStepper from './_components/VerticalStepper';

// const AccountForm = () => <div>🚀 Create your account here.</div>;
// const SecuritySetup = () => <div>🔐 Setup two-factor authentication.</div>;
// const ProfileInfo = () => <div>📷 Upload your profile picture.</div>;

// const AddressForm = () => <div>🏠 Enter your address details.</div>;
// const PaymentSetup = () => <div>💳 Set up your payment method.</div>;

// const ConfirmationMessage = () => <div>✅ Review and confirm your details.</div>;
// const FinalSteps = () => <div>🎉 Congratulations! You’re all set.</div>;


function RightProgressTracker() {



    return (
        <div className="p-6 flex flex-col flex-[0.3]">
            <ProgressBar value={30} />
            <VerticalStepper

            />

        </div>
    );
}

export default RightProgressTracker

