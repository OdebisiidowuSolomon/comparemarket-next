'use client'

import { createContext, useReducer } from "react";

export enum ESubStepLabel {
    INPROGRESS = 'INPROGRESS',
    INCOMPLETE = 'INCOMPLETE',
    COMPLETED = 'COMPLETED',
}



export interface IStep {
    title: string;
    stepId: number;
    subSteps: ISubStep[];
}

export interface ISubStep {
    label: string; id: number, linkTo: string, status: ESubStepLabel
}




export const steps: IStep[] = [
    {
        title: "Car details",
        stepId: 1,
        subSteps: [
            { label: "Your car", id: 10, linkTo: '/your-car', status: ESubStepLabel.INCOMPLETE },
            { label: "Car value", id: 11, linkTo: '/car-value', status: ESubStepLabel.INCOMPLETE },
            { label: "Car usage", id: 12, linkTo: '/car-usage', status: ESubStepLabel.INCOMPLETE },
            { label: "Car storage", id: 13, linkTo: '/car-storage', status: ESubStepLabel.INCOMPLETE },
            { label: "Other cars", id: 14, linkTo: '/other-cars', status: ESubStepLabel.INCOMPLETE },
        ],
    },
    {
        title: "Your details",
        stepId: 2,
        subSteps: [
            { label: "About you", linkTo: '/about-you', id: 20, status: ESubStepLabel.INCOMPLETE },
            { label: "Your household", linkTo: '/your-household', id: 21, status: ESubStepLabel.INCOMPLETE }
        ],
    },
    {
        title: "Your policy",
        stepId: 3,
        subSteps: [{ label: "Policy Type", linkTo: '#', id: 30, status: ESubStepLabel.INCOMPLETE }],
    },
    {
        title: "Check your answers",
        stepId: 4,
        subSteps: [{ label: "Review", linkTo: '#', id: 40, status: ESubStepLabel.INCOMPLETE }],
    },
];


interface IProgressData {
    steps: IStep[],
    currentSubStep: string,
    currentStep: string,
    allSubSteps: ISubStep[]
}



const initialState: IProgressData = {
    steps,
    currentSubStep: '',
    currentStep: '1',
    // allSubSteps: []
    allSubSteps: steps.flatMap((step) => step.subSteps)
}

export enum EProgressActionEnum {
    UPDATE_SUBSTEP_STATUS = 'UPDATE_SUBSTEP_STATUS',
    UPDATE_SUBSTEP_STATUS_VIA_PATHNAME = 'UPDATE_SUBSTEP_STATUS_VIA_PATHNAME',
}

type ProgressAction = {
    type: EProgressActionEnum.UPDATE_SUBSTEP_STATUS, payload: { subStep: ISubStep }
} |
{ type: EProgressActionEnum.UPDATE_SUBSTEP_STATUS_VIA_PATHNAME, payload: { subStepPathname: string } }



export const ProgressContext = createContext<{ progressData: IProgressData, dispatch: React.Dispatch<ProgressAction> }>({ progressData: initialState, dispatch: () => null })

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {

    const [progressData, updateProgressData] = useReducer(ProgressReducer, initialState)

    return <ProgressContext.Provider value={{ progressData, dispatch: updateProgressData }}>
        {children}
    </ProgressContext.Provider>
}



export const ProgressReducer = (initialState: IProgressData, action: ProgressAction): IProgressData => {

    let _initialState: IProgressData = { ...initialState }


    switch (action.type) {
        case EProgressActionEnum.UPDATE_SUBSTEP_STATUS:
            // console.log(action, 'Hii');

            let { subStep } = action.payload

            const [currentStep, currentSubStep] = `${subStep.id}`.split('')

            subStep = { ...subStep, status: ESubStepLabel.INPROGRESS }

            console.log(currentStep, currentSubStep, 'currentStep,currentSubStep');


            const _steps = initialState.steps.map(_step => ({
                ..._step,

                subSteps: _step.subSteps.map((_subStep => ({
                    ..._subStep,
                    status: _subStep.id === subStep.id
                        ? ESubStepLabel.INPROGRESS :
                        _subStep.id < subStep.id ?
                            ESubStepLabel.COMPLETED : ESubStepLabel.INCOMPLETE
                })))
            }))

            _initialState = { steps: _steps, allSubSteps: [...initialState.allSubSteps], currentStep, currentSubStep }

            console.log(_initialState, 'Hii');

            return _initialState

        case EProgressActionEnum.UPDATE_SUBSTEP_STATUS_VIA_PATHNAME:
            // console.log(action, 'Hii');

            const subStepPathname = action.payload.subStepPathname;

            let matchingSubStep = initialState.steps.flatMap((step) => step.subSteps).find(step => step.linkTo === subStepPathname)

            if (!matchingSubStep) return initialState


            const [currentMatchStep, currentMatchSubStep] = `${matchingSubStep.id}`.split('')

            matchingSubStep = { ...matchingSubStep, status: ESubStepLabel.INPROGRESS }



            const _matchSteps = initialState.steps.map(_step => ({
                ..._step,

                subSteps: _step.subSteps.map((_subStep => ({
                    ..._subStep,
                    status: _subStep.id === matchingSubStep.id
                        ? ESubStepLabel.INPROGRESS :
                        _subStep.id < matchingSubStep.id ?
                            ESubStepLabel.COMPLETED : ESubStepLabel.INCOMPLETE
                })))
            }))

            _initialState = { steps: _matchSteps, allSubSteps: [...initialState.allSubSteps], currentStep: currentMatchStep, currentSubStep: currentMatchSubStep }


            return _initialState


        default:
            return initialState
    }
}