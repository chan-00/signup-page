//import styled
import styled from "styled-components";
interface TextType {
    fontSize: string,
    bold: string,
    text: string
}

interface TextStyledType {
    fontSize: string,
    bold: string
}

const TextBox = styled.p<TextStyledType>`
  margin: 0;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.bold};
`;
const Text = ({ fontSize, bold, text }: TextType) => {
    return (
        <TextBox fontSize={fontSize} bold={bold}>
            {text}
        </TextBox>
    )
}

export {Text}