import { COLORS } from "@/constants/colors";
import { EProgressActionEnum, ESubStepLabel, IStep, ISubStep, ProgressContext } from "@/context";
import { motion } from 'framer-motion';
import { Pencil, Plus } from 'lucide-react';
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";


const VerticalStepper: React.FC = () => {

    const { progressData: { steps, currentStep } } = useContext(ProgressContext)


    return (
        <div className="">
            {
                steps.map((step, index, arr) => (
                    <VerticalStepperStep step={step} isExpanded={+currentStep === step.stepId} key={step.stepId} isLastItem={arr.length - 1 === index} />
                ))
            }

        </div>
    );
};

export default VerticalStepper;


const VerticalStepperStep = ({ isLastItem, step, }: { step: IStep, isExpanded?: boolean, isLastItem?: boolean }) => {

    const { progressData: { steps, currentStep, currentSubStep } } = useContext(ProgressContext)

    const stepIsDone = step.subSteps.every(step => step.status === ESubStepLabel.COMPLETED)

    const _prevStepIsDone = step.stepId <= 1 ? true : !!steps.find(s => s.stepId === step.stepId - 1)?.subSteps.every(step => step.status === ESubStepLabel.COMPLETED)

    // const [isExpanded, setIsExpanded] = useState(isOpened && _prevStepIsDone)
    const [isExpanded, setIsExpanded] = useState(_prevStepIsDone)


    useEffect(() => {
        const _prevStepIsDone = step.stepId <= 1 ? true : !!steps.find(s => s.stepId === step.stepId - 1)?.subSteps.every(step => step.status === ESubStepLabel.COMPLETED)
        setIsExpanded(_prevStepIsDone)
        // if (_prevStepIsDone) {
        //     setIsExpanded(_prevStepIsDone)
        // }
    }, [step.stepId, steps])


    return <div>
        <div className="flex items-centerl gap-3">
            <div className="flex flex-col items-center">
                <div className={`rounded-full border-2 ${isExpanded || stepIsDone ? 'p-[6px] border-baseColor' : 'h-8 w-8 flex justify-center items-center p-3 border-gray-300'} ${stepIsDone && 'bg-baseColor'}`}>
                    {stepIsDone ? <IoCheckmarkSharp size={18} color={COLORS.white} /> : isExpanded ? <Pencil size={18} color={COLORS.baseColor} /> : <span className="text-gray-400 font-medium">{step.stepId}</span>}
                </div>
                <div className={`w-[3px] bg-theme-surface-mid ${isLastItem ? 'h-0' : 'h-full'} flex flex-col items-center`}>
                    <div
                        className={`w-[5px] bg-baseColor ${isLastItem && 'h-0'}`}
                        style={{ height: !isExpanded ? 0 : step.stepId < +currentStep ? '100%' : step.stepId > +currentStep ? 0 : `${Math.floor(((+currentSubStep + 1) / step.subSteps.length) * 100)}%` }}
                    />

                </div>
            </div>
            <div className={`flex-1 self-end pt-1 pb-4 mb-4 border-gray-200 ${isLastItem ? 'border-b-[0px]' : 'border-b-[1px]'}`}>
                <div className={`flex justify-between items-center ${_prevStepIsDone ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => _prevStepIsDone ? setIsExpanded(p => !p) : null}>
                    <span className={`font-medium text-lg leading-0 ${isExpanded || stepIsDone ? 'text-baseColor' : 'text-gray-400'}`}>{step.title}</span>
                    {<div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        {_prevStepIsDone ? isExpanded ?
                            <FaMinus color={COLORS.baseColor} /> :
                            <Plus color={COLORS.baseColor} /> : <div className="h-5 w-5" />
                        }
                    </div>}
                </div>
                {
                    <motion.div
                        className={`flex flex-col pb-0 overflow-hidden p-5 py-7 md:px-0! md:py-3`}
                        initial={false}
                        // animate={{ height: _prevStepIsDone ? isExpanded ? "auto" : 0 : 0, opacity: isExpanded ? 1 : 0 }}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* step substep */}

                        {step.subSteps.map((subStep, index, arr) => (
                            <VerticalStepperStepItem key={subStep.id} subStep={subStep} status={subStep.status} isLastItem={arr.length - 1 === index} />
                        ))}
                    </motion.div>}
            </div>
        </div>
    </div>

}

const VerticalStepperStepItem = ({ status, subStep, isLastItem }: { subStep: ISubStep, status: ESubStepLabel, isLastItem?: boolean }) => {

    const { dispatch } = useContext(ProgressContext)


    const inProgress = status === ESubStepLabel.INPROGRESS
    const inComplete = status === ESubStepLabel.INCOMPLETE
    const isCompleted = status === ESubStepLabel.COMPLETED

    const handlePress = () => {
        dispatch({ type: EProgressActionEnum.UPDATE_SUBSTEP_STATUS, payload: { subStep } })
    }

    return <Link href={`/compare${subStep.linkTo}` || ''} onClick={handlePress} className={`mb-4 ${inProgress ? 'ml-2 text-black font-semibold' : inComplete ? 'text-gray-400' : isCompleted ? 'text-baseColor' : ''} ${isLastItem && 'mb-0!'}`}>{subStep.label}</Link>
}