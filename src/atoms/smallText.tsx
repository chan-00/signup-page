import {Text} from "./text";

interface SmallTextType {
    text: string
}

const SmallText = ({ text }: SmallTextType) => {
    return (
        <Text fontSize="0.8rem" bold="400" text={text} />
    )
}

export { SmallText };