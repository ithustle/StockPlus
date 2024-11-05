import { HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface OptionButton {
    icon: ReactNode
    text: string
    color: string
}

export default function OptionButton(props: OptionButton): JSX.Element {

    const {
        icon,
        text,
        color
    } = props

    return (
        <HStack>
            {icon}
            <Text
                color={color}
            >
                {text}
            </Text>
        </HStack>
    )
}