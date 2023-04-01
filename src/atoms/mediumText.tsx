import {Text} from "./text";

interface MediumTextType {
    text: string
}

const Mideumtext = ({ text }: MediumTextType) => {
    return (
        <Text fontSize="1.2rem" bold="400" text={text} />
    )
}

export { Mideumtext };