import { ProgressProvider } from '@/context';
import React from 'react';
import Header from './_components/Header';
import PathnameWatcher from './_components/PathNameWatcher';
import RightProgressTracker from './_components/RightProgressTracker';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

  

    return (
        <ProgressProvider>
            <div className='mx-4 md:mx-10 lg:mx-32 cmxl:mx-72 mt-7'>
                <Header />
                <div className='flex flex-col-reverse md:gap-28 md:flex-row'>
                    <div className='flex flex-col flex-[0.7]'>
                        {children}
                    </div>
                    {/* <LeftProgressTracker /> */}
                    <RightProgressTracker />
                </div>
            </div>
            <PathnameWatcher />
        </ProgressProvider>
    )
}

export default layout