import styled from "styled-components";
import React from "react";

interface ContainerType {
    children: React.ReactNode
}

const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterContainer = ({ children }: ContainerType) => {
    return (
        <CenterBox>
            {children}
        </CenterBox>
    )
}

export { CenterContainer };