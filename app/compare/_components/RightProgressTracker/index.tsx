'use client'

import { ProgressBar } from './_components';
import VerticalStepper from './_components/VerticalStepper';


function RightProgressTracker() {



    return (
        <div className="flex flex-col cmxss:p-6 cmxss:flex-[0.3]">
            <ProgressBar />
            <VerticalStepper />
        </div>
    );
}

export default RightProgressTracker

