export interface IQuestionH2TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string
}

export interface IQuestionLabelProps extends React.HTMLAttributes<HTMLLegendElement> {
    text: string
}

export interface IQuestionSubLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
    text: string
}

export interface IQuestionContainer extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string
}

export interface ICustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftText?: string
    rightText?: string
    containerClassName?: string
}

export interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string
}


export type TSize = 'small' | 'medium' | 'base' | 'large'