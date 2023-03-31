import React from "react";

interface InputType {
    placeholder: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, type, onChange}: InputType) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e);
    }

    return (
        <input
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
        />
    )
}


export {Input};