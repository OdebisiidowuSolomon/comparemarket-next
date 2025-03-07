import React from 'react'
import { ICustomInputProps } from './components.def'


const CustomInput: React.FC<ICustomInputProps> = ({ leftText, rightText, containerClassName, ...props }) => {
    return (
        <div className={`flex items-center border-baseColor py-3 px-4 rounded-2xl border-2 w-fit ${containerClassName}`}>
            {leftText && <p className='text-baseColor font-semibold'>{leftText}</p>}
            <input type="text" {...props} className={`focus:outline-none ${props.className}`} />
            {rightText && <p className='text-baseColor font-semibold'>{rightText}</p>}
        </div>
    )
}

export default CustomInput

export const CustomSelect = ({ disabled, error, customClassName, custom2ClassName, label }: { disabled?: boolean, error?: boolean, customClassName?: string, custom2ClassName?: string, label?: string }) => {


    return <div className={`mb-5 ${error && 'border-l-4 border-red-800'} ${customClassName}`}>
        {label && <p className='text-base text-baseColor mb-2'>Make of car</p>}
        <div className={`w-[60%] relative ${custom2ClassName}`}>
            <select
                className={`w-full bg-gray-50 py-[10px] px-4 border-2 rounded-2xl focus:ring-2 focus:ring-baseColor focus:border-baseColor appearance-none ${disabled ? 'border-gray-300' : 'border-baseColor'}`}
                disabled={disabled}
            >
                <option defaultValue="" disabled selected>
                    Please select...
                </option>
                <option value="BMW">BMW</option>
                <option value="AUDI">AUDI</option>
                <option value="DALLAS">DALLAS</option>
                <option value="FERRARI">FERRARI</option>
            </select>

            <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="6 9 10 13 14 9"></polyline>
            </svg>
        </div>
        {error && <p className='text-sml font-bold text-red-800 my-2'>Please answer this question to continue.</p>}
    </div>
}

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[];
}

export const CustomSelectl: React.FC<CustomSelectProps> = ({ options, className, ...props }) => {
    return (
        <div className='w-full relative'>

            <select
                className={`w-full px-4 py-2 border-2 border-blue-500 rounded-md bg-white text-gray-800 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            hover:border-blue-700 transition duration-200 appearance-none ${className}`}
                {...props}
            >
                <option defaultValue="" disabled selected>
                    Please select...
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="6 9 10 13 14 9"></polyline>
            </svg>
        </div>
    );
}



