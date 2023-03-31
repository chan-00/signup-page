import styled from "styled-components";
import {Button} from "./button";
import React from "react";

interface ButtonSubmitType {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonSubmitBox = styled(Button)`
  background-color: blue;
  color: white;
  
  :hover {
    background-color: white;
    color: blue;
  }
`;

const ButtonSubmit = ({text, onClick}: ButtonSubmitType) => {
    return (
        <ButtonSubmitBox text={text} onClick={onClick} />
    )
}

export {ButtonSubmit}