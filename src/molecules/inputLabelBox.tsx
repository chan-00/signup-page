//import component
import {Input} from "../atoms/input";
import {SmallText} from "../atoms/smallText";
//import styled
import styled from "styled-components";
//import React
import React, {useState} from "react";


interface InputLabelBoxType {
    placeholder: string,
    type: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number
}

const InputLabelBox = ({ placeholder, type, onChange, maxLength }: InputLabelBoxType) => {

    const [ inputTextInfo, setInputTextInfo ] = useState<string>("");

    return (
        <div>
            <Input
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                maxLength={maxLength}
            />
            <SmallText text={inputTextInfo} />
        </div>
    )
}

export { InputLabelBox };