'use client'

import { ProgressContext } from '@/context';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';

export function useNavigationHandler(dir: 'prev' | 'next') {
    const pathname = usePathname(); // Get the router object
    const router = useRouter()

    const { progressData: { allSubSteps }, } = useContext(ProgressContext);


    return () => {

        const validPathName = pathname.split('/compare')[1]

        if (validPathName) {

            const validIndex = allSubSteps.findIndex(subStep => subStep.linkTo === validPathName)



            if (validIndex < 0) return



            if (dir === 'prev') {
                if (validIndex === 0) return

                const prevSubStep = allSubSteps[validIndex - 1]

                router.push(`/compare${prevSubStep.linkTo}`)


            } else if (dir === 'next') {

                if (validIndex + 1 >= allSubSteps.length) return

                const nextSubStep = allSubSteps[validIndex + 1]

                if (nextSubStep.linkTo === '#' || !nextSubStep.linkTo) return

                // alert(`${validIndex} ${allSubSteps.length} ${nextSubStep.linkTo}`)


                router.push(`/compare${nextSubStep.linkTo}`)

            }

        } else {
            console.log('invalidPathName');
        }
    }

}

