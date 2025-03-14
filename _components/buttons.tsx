'use client'

import { COLORS } from '@/constants/colors';
import { useNavigationHandler } from '@/lib/handleNavigation';
import Link from 'next/link';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import CustomInput from './input';
import { TSize } from './components.def';

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


export const CustomRadioInput = ({ isSelected, size }: { isSelected?: boolean, size?: TSize }) => {


    return <div className={`rounded-full border-2 border-baseColor flex items-center justify-center ${size === 'medium' ? 'w-6 h-6' : 'h-7 w-7'}`}>
        {isSelected && <div className={`bg-baseColor rounded-full ${size === 'medium' ? 'h-[16px] w-[16px]' : 'h-[19px] w-[19px]'}`} />}
    </div>
}

export const CustomCheckboxInput = ({ isSelected, size }: { isSelected?: boolean, size?: TSize }) => {
    return <div className={`rounded-md border-2 border-baseColor flex items-center justify-center ${size === 'medium' ? 'w-6 h-6' : 'h-7 w-7'} ${isSelected && 'bg-baseColor'}`}>

        {isSelected && <IoMdCheckmark size={22} color={COLORS.white} />}

    </div>
}


export const TextOnInput = ({ labelText }: { labelText: string }) => {
    return <div>
        <p className='my-2 text-baseColor'>{labelText}</p>
        <CustomInput className='w-[70px]' />
    </div>
}


export const CustomNextButton = () => {

    const handleNavigation = useNavigationHandler('next')


    return <CustomButton title='Next' onClick={handleNavigation} className='cursor-pointer' />
}

export const CustomBackButton = () => {

    const handleNavigation = useNavigationHandler('prev')


    return <CustomButton title='Back' onClick={handleNavigation} outlinebutton className='cursor-pointer' />
}
