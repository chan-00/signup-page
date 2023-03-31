import {Text} from "./text";

interface BigTextType {
    text: string
}

const Bigtext = ({ text }: BigTextType) => {
    return (
        <Text fontSize="1.6rem" bold="700" text={text} />
    )
}

export { Bigtext };