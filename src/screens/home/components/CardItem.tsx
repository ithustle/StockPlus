import { Box, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import OptionButton from "./OptionButton";
import InfoItem from "./InfoItem";
import { text } from "stream/consumers";
import { VscEdit, VscTrash } from "react-icons/vsc";

export default function CardItem(): JSX.Element {

    return (
        <Box
            backgroundColor={'#fff'}
            width={'380px'}
            padding={6}
            borderRadius={4}
        >
            <HStack>
                <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/044/812/078/small/sleek-desktop-computer-icon-on-a-transparent-background-png.png"
                    height={20}
                />
                <Text
                    fontWeight={'semibold'}
                    fontSize={'2xl'}
                >
                    Computador
                </Text>
            </HStack>
            <Text
                color={'#777'}
                my={4}
            >
                Descrição
            </Text>
            <HStack
                justifyContent={'space-between'}
                my={4}
            >
                <InfoItem
                    label="Preço"
                    value="134.000"
                />
                <InfoItem
                    label="Marca"
                    value="Lenovo"
                />
                <InfoItem
                    label="Processador"
                    value="i9"
                />
            </HStack>
            <HStack
                marginTop={8}
            >
                <OptionButton
                    color="#8133E0"
                    text={"Vender"}
                    icon={<RiShoppingCart2Fill
                        style={{
                            height: 20,
                            width: 20,
                            color: "#8133E0"
                        }}
                    />
                    }
                />

                <Spacer />

                <HStack>
                    <OptionButton
                        color="black"
                        text={"Editar"}
                        icon={<VscEdit
                            style={{
                                height: 20,
                                width: 20
                            }}
                        />}
                    />
                    <OptionButton
                        text={"Vender"}
                        color="red"
                        icon={<VscTrash
                            style={{
                                height: 20,
                                width: 20,
                                color: 'red'
                            }}
                        />}
                    />
                </HStack>
            </HStack>
        </Box>
    )
}