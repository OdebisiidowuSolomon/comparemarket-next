"use client"
import { COLORS } from '@/constants/colors';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import { IoIosCheckmarkCircle, IoMdCheckmark } from 'react-icons/io';
import { ILabelProps, IQuestionContainer, IQuestionLabelProps, IQuestionSubLabelProps, IText } from './components.def';
import { CustomCheckboxInput, CustomRadioInput } from './buttons';

export function AccordionItem({ label = "Why do we ask this?", content }: { label?: string, content: string }) {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className='my-4'>
            <div className='flex items-center gap-1 cursor-pointer group' onClick={() => setExpanded(p => !p)}>
                <ChevronDown
                    size={26}
                    className={`transform transition-transform ${expanded ? "rotate-180" : ""
                        }`}
                    color={COLORS.green}
                />
                <span className='text-green font-bold text-[15px] underline group-hover:no-underline'>{label}</span>
            </div>
            {expanded && <div className='my-3'>{content}</div>}
        </div>
    )
}


export const SuccessMessage = () => {
    return <div className='flex items-center border border-green p-3 rounded-2xl gap-2 bg-green-50/40'>
        <IoIosCheckmarkCircle color={COLORS.green} size={30} />
        <span>We&apos;ve got your car details</span>
    </div>
}

export const EditText = () => {
    return <div className='flex items-center gap-1'>
        <BsPencil color={COLORS.green} size={18} />
        <p className='text-green underline font-bold'>Change</p>
    </div>
}

export const CheckMarkText = () => {
    return <div className='flex items-center gap-1 mb-3'>
        <IoMdCheckmark size={20} color={COLORS.green} />
        <p>Faster quotes, less form filling</p>
    </div>
}




export const QuestionLegend: React.FC<IQuestionLabelProps> = ({ text, ...props }) => {
    return <legend className={`text-baseColor text-[22px] font-medium pb-4 ${props.className}`}>{text}</legend>
}

export const QuestionSubLabel: React.FC<IQuestionSubLabelProps> = ({ text, ...props }) => {
    return <span {...props} className={`text-[16px] block mb-3 ${props.className}`}>{text}</span>
}

export const RadioSelect = ({ labelText, selected, subtitle }: { labelText: string, subtitle?: string, selected?: boolean }) => {

    return <div className='flex items-start gap-3 mb-6'
        onClick={(e) => console.log('Clicked', e)}
    >
        <CustomRadioInput isSelected={selected} />
        <div>
            <label htmlFor="">
                <span>{labelText}</span>
            </label>
            {subtitle && <p className='text-gray-500 text-[15px] font-medium'>{subtitle}</p>}
        </div>
    </div>
}

export const CheckboxSelect = ({ labelText, selected }: { labelText: string, selected?: boolean }) => {

    return <div className='flex items-center gap-3 my-5'
        onClick={(e) => console.log('Clicked', e)}
    >
        <CustomCheckboxInput isSelected={selected} />
        <label htmlFor="">
            <span>{labelText}</span>
        </label>
    </div>
}

export const QuestionContainer: React.FC<IQuestionContainer> = ({ children, ...props }) => {
    return <div {...props} className={`py-5 border-y border-gray-300 ${props.className}`}>
        {children}
    </div>
}


export const QuestionLabel: React.FC<ILabelProps> = ({ text, ...props }) => {
    return <label {...props} className={`inline-block text-baseColor text-[22px] font-medium pb-6 ${props.className || ''}`}>{text}</label>
}


export const Text3: React.FC<IText> = ({ text, ...props }) => {
    return <p className={`text-baseColor text-sm mb-2 ${props.className || ''}`} {...props}>{text}</p>
}