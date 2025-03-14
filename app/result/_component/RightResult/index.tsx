import React from 'react'
import { ResultQuotePriceCard } from './components'

function RightResult() {
    return (
        <div className='flex-1 md:flex-[0.7] lg:flex-[0.8]'>
            <div>
                <ResultQuotePriceCard />
                <ResultQuotePriceCard />
                <ResultQuotePriceCard />
                <ResultQuotePriceCard />
                <ResultQuotePriceCard />
            </div>

        </div>
    )
}

export default RightResult