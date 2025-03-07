'use client'

import { COLORS } from '@/constants/colors';
import { ESubStepLabel, ProgressContext } from '@/context';
import { ChevronDown } from 'lucide-react';
import React, { useContext, useState } from 'react'

export const ProgressBar = () => {

    const { progressData: { steps, allSubSteps } } = useContext(ProgressContext)

    const [expanded, setExpanded] = useState(false);



    const totalCompleted = steps.reduce((acc, curr) => {
        return acc += curr.subSteps.reduce((_acc, subStep) => {
            return _acc += subStep.status === ESubStepLabel.COMPLETED ? 1 : 0
        }, 0)
    }, 0)

    const percentage = Math.ceil(totalCompleted / allSubSteps.length * 100)


    return (
        <div className='mb-5'>
            <div className="w-full bg-theme-surface-mid h-2 overflow-hidden mb-3">
                <div
                    className="bg-baseColor h-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className='flex justify-between items-center' onClick={() => setExpanded(p => !p)}>
                <span>{percentage}% complete</span>
                <div className='block md:hidden'>
                    <ChevronDown
                        size={26}
                        className={`transform transition-transform ${expanded ? "rotate-180" : ""
                            }`}
                        color={COLORS.green}
                    />
                </div>
            </div>
        </div>
    );
};