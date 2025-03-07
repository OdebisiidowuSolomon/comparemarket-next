// import { COLORS } from "@/constants/colors";
// import { EProgressActionEnum, ESubStepLabel, IStep, ISubStep, ProgressContext } from "@/context";
// import { motion } from 'framer-motion';
// import { Pencil, Plus } from 'lucide-react';
// import Link from "next/link";
// import React, { useContext, useState } from "react";
// import { FaMinus } from "react-icons/fa";


// // const steps: Step[] = [
// //     {
// //         title: "Car details",
// //         subSteps: [
// //             { label: "Your car", completed: false, linkTo: '/vehicle-lookup' },
// //             { label: "Car value", completed: false, linkTo: '#' },
// //             { label: "Car usage", completed: false, linkTo: '#' },
// //         ],
// //     },
// //     {
// //         title: "Your details",
// //         subSteps: [{ label: "Personal Info", completed: false, linkTo: '#' }],
// //     },
// //     {
// //         title: "Your policy",
// //         subSteps: [{ label: "Policy Type", completed: false, linkTo: '#' }],
// //     },
// //     {
// //         title: "Check your answers",
// //         subSteps: [{ label: "Review", completed: false, linkTo: '#' }],
// //     },
// // ];



// const VerticalStepper: React.FC = () => {

//     const { progressData: { steps } } = useContext(ProgressContext)


//     // const handleSubStepClick = (stepIndex: number, subStepIndex: number) => {
//     //     const updatedSteps = [...stepData];
//     //     updatedSteps[stepIndex].subSteps[subStepIndex].completed = true;

//     //     setStepData(updatedSteps);
//     // };

//     return (
//         <div className="">
//             {
//                 steps.map((step, index, arr) => (
//                     <VerticalStepperStep step={step} isExpanded key={step.stepId} isLastItem={arr.length - 1 === index} />
//                 ))
//             }
//             {/* <VerticalStepperStep />
//             <VerticalStepperStep />
//             <VerticalStepperStep isLastItem /> */}
//         </div>
//     );
// };

// export default VerticalStepper;


// // const VerticalStepperStep = ({ isLastItem, step }: { step: IStep, isExpanded?: boolean, isLastItem?: boolean }) => {
// const VerticalStepperStep = ({ isLastItem, step }: { step: IStep, isLastItem?: boolean }) => {

//     // const [isExpanded, setIsExpanded] = useState(false)

//     const { progressData: { currentStep, currentSubStep } } = useContext(ProgressContext)


//     console.log(step.stepId, +currentStep, step.stepId < +currentStep);


//     return <div>
//         <div className="flex items-centerl gap-3">
//             <div className="flex flex-col items-center">
//                 <div className={`rounded-full border-2 ${isExpanded ? 'p-[6px] border-baseColor' : 'h-8 w-8 flex justify-center items-center p-3 border-gray-300'}`}>
//                     {isExpanded ? <Pencil size={18} color={COLORS.baseColor} /> : <span className="text-gray-400 font-medium">1</span>}
//                 </div>
//                 <div className={`w-[3px] bg-theme-surface-mid ${isLastItem ? 'h-0' : 'h-full'} flex flex-col items-center`}>
//                     {/* <div className={`w-[5px] bg-baseColor ${isLastItem ? 'h-0' : isExpanded && 'h-[50%]'}`} /> */}
//                     <div
//                         className={`w-[5px] bg-baseColor ${isLastItem && 'h-0'}`}
//                         style={{ height: !isExpanded ? 0 : step.stepId < +currentStep ? '100%' : step.stepId > +currentStep ? 0 : `${Math.floor(((+currentSubStep + 1) / step.subSteps.length) * 100)}%` }}
//                     // style={{ height: isExpanded ? +currentStep < step.stepId ? '100%' : `${Math.floor((5 / step.subSteps.length) * 100)}%` : 0 }}
//                     />

//                 </div>
//             </div>
//             <div className={`flex-1 self-end pt-1 pb-4 mb-4 border-gray-200 ${isLastItem ? 'border-b-[0px]' : 'border-b-[1px]'}`}>
//                 <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(p => !p)}>
//                     <span className={`font-medium text-lg leading-0 ${isExpanded ? 'text-baseColor' : 'text-gray-400'}`}>Car Details</span>
//                     <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
//                         {isExpanded ?
//                             <FaMinus color={COLORS.baseColor} /> :
//                             <Plus color={COLORS.baseColor} />
//                         }
//                     </div>
//                 </div>
//                 {
//                     // isExpanded &&
//                     // <div className={`flex flex-col py-3 pb-0 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
//                     <motion.div
//                         className={`flex flex-col py-3 pb-0 overflow-hidden`}
//                         initial={false}
//                         animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         {/* step substep */}

//                         {step.subSteps.map((subStep, index, arr) => (
//                             <VerticalStepperStepItem key={subStep.id} subStep={subStep} status={subStep.status} isLastItem={arr.length - 1 === index} />
//                         ))}

//                         {/* <VerticalStepperStepItem text="Car value" status={ESubStepLabel.PREVACTIVE} />
//                     <VerticalStepperStepItem text="Car usage" status={ESubStepLabel.ACTIVE} />
//                     <VerticalStepperStepItem text="Car storage" status={ESubStepLabel.INACTIVE} />
//                     <VerticalStepperStepItem text="Other cars" status={ESubStepLabel.INACTIVE} /> */}

//                     </motion.div>}
//             </div>
//         </div>
//     </div>

// }

// const VerticalStepperStepItem = ({ status, subStep, isLastItem }: { subStep: ISubStep, status: ESubStepLabel, isLastItem?: boolean }) => {

//     const { dispatch } = useContext(ProgressContext)


//     const inProgress = status === ESubStepLabel.INPROGRESS
//     const inComplete = status === ESubStepLabel.INCOMPLETE
//     const isCompleted = status === ESubStepLabel.COMPLETED

//     const handlePress = () => {
//         dispatch({ type: EProgressActionEnum.UPDATE_SUBSTEP_STATUS, payload: { subStep } })
//     }

//     return <Link href={`/compare${subStep.linkTo}` || ''} onClick={handlePress} className={`mb-4 ${inProgress ? 'ml-2 text-black font-semibold' : inComplete ? 'text-gray-400' : isCompleted ? 'text-baseColor' : ''} ${isLastItem && 'mb-0!'}`}>{subStep.label}</Link>
// }