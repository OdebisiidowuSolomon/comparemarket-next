import { COLORS } from '@/constants/colors';
import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from 'react-icons/io';
import CustomInput from './input';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    title: string; // Custom prop
    titleClassName?: string
    outlinebutton?: boolean
}

const CustomButton: React.FC<ButtonProps> = ({ titleClassName, outlinebutton, className, ...props }) => {
    return (
        <div {...props} className={`bg-baseColor py-3 px-6 w-fit rounded-3xl ${outlinebutton ? 'bg-white border border-baseColor' : 'bg-baseColor'} ${className}`}>
            <span className={`font-bold ${outlinebutton ? 'text-baseColor' : 'text-white'} ${titleClassName}`}>{props.title}</span>
        </div>
    )
}

export default CustomButton


export const CustomLinkButton: React.FC<ButtonProps> = ({ titleClassName, outlinebutton, className, ...props }) => {
    return (
        <div {...props} className={`bg-baseColor py-3 px-6 w-fit rounded-3xl ${outlinebutton ? 'bg-white border-2 border-baseColor' : 'bg-baseColor'} ${className}`}>
            <Link href={'#'} className={`font-bold ${outlinebutton ? 'text-baseColor' : 'text-white'} ${titleClassName}`}>{props.title}</Link>
        </div>
    )
}


export const CustomRadioInput = ({ isSelected }: { isSelected?: boolean }) => {
    return <div className='h-7 w-7 rounded-full border-2 border-baseColor flex items-center justify-center'>
        {isSelected && <div className='h-[19px] w-[19px] bg-baseColor rounded-full' />}
    </div>
}

export const CustomCheckboxInput = ({ isSelected }: { isSelected?: boolean }) => {
    return <div className={`h-7 w-7 rounded-md border-2 border-baseColor flex items-center justify-center ${isSelected && 'bg-baseColor'}`}>

        {isSelected && <IoMdCheckmark size={22} color={COLORS.white} />}

    </div>
}


export const TextOnInput = ({ labelText }: { labelText: string }) => {
    return <div>
        <p className='my-2 text-baseColor'>{labelText}</p>
        <CustomInput className='w-[70px]' />
    </div>
}