import { HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface OptionButton {
    icon: ReactNode
    text: string
    color: string
    onClick: () => void
}

export default function OptionButton(props: OptionButton): JSX.Element {

    const {
        icon,
        text,
        color,
        onClick
    } = props

    return (
        <HStack
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            {icon}
            <Text
                color={color}
            >
                {text}
            </Text>
        </HStack>
    )
}