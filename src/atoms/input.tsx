import React from "react";

interface InputType {
    placeholder: string,
    type: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    maxLength?: number
}

const Input = ({placeholder, type, onChange, className, maxLength }: InputType) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e);
    }

    return (
        <input
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            className={className}
            maxLength={maxLength}
        />
    )
}


export {Input};