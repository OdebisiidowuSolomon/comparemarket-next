import React from 'react'
import Header from './_components/Header';
import RightProgressTracker from './_components/RightProgressTracker';
import { ProgressProvider } from '@/context';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProgressProvider>
            <div className='mx-72 mt-7'>
                <Header />
                <div className='flex flex-row gap-28'>
                    <div className='flex flex-col flex-[0.7]'>
                        {children}
                    </div>
                    {/* <LeftProgressTracker /> */}
                    <RightProgressTracker />
                </div>
            </div>
        </ProgressProvider>
    )
}

export default layout