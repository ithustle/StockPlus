import { Box, Text } from "@chakra-ui/react";

interface InfoItem {
    label: string
    value: string
}

export default function InfoItem(props: InfoItem): JSX.Element {

    const {
        label,
        value
    } = props

    return (
        <Box>
            <Text
                fontWeight={'bold'}
            >
                {label}
            </Text>
            <Text
                color={'#777'}
            >
                {value}
            </Text>
        </Box>
    )
}