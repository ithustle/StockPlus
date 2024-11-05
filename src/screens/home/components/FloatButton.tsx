import { Flex } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

interface FloatButton {
    onOpenDialog: () => void
}

export default function FloatButton(props: FloatButton): JSX.Element {

    return (
        <Flex
            pos={'absolute'}
            right={8}
            bottom={8}
            bg={'#8133E0'}
            height={82}
            width={82}
            borderRadius={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            css={{
                _hover: {
                    cursor: 'pointer'
                },
                _active: {
                    scale: .9
                }
            }}
            onClick={props.onOpenDialog}
        >
            <IoAdd 
                style={{
                    height: 40,
                    width: 40,
                    color: '#fff',
                }}
                
            />
        </Flex>
    )
}