import React from 'react'

export const ProgressBar = ({ value }: { value: number }) => {
    return (
        <div className='mb-5'>
            <div className="w-full bg-theme-surface-mid h-2 overflow-hidden mb-3">
                <div
                    className="bg-baseColor h-full transition-all duration-300"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
            <span>{value}% complete</span>
        </div>
    );
};