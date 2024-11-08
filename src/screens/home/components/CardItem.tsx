import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import OptionButton from "./OptionButton";
import InfoItem from "./InfoItem";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { Item } from "@/types/ItemType";

interface CardItem {
    data: Item
    position: number
    onDeleteItem: (position: number) => void
}

export default function CardItem(props: CardItem): JSX.Element {

    const {
        data,
        position,
        onDeleteItem
    } = props

    function handleOnDelete() {
        onDeleteItem(position)
    }

    return (
        <Box
            backgroundColor={'#fff'}
            width={'380px'}
            padding={6}
            borderRadius={4}
        >
            <HStack>
                <Image
                    src={data.itemImage}
                    height={20}
                />
                <Text
                    fontWeight={'semibold'}
                    fontSize={'2xl'}
                >
                    {data.itemName}
                </Text>
            </HStack>
            <Text
                color={'#777'}
                my={4}
            >
                {data.itemDescription}
            </Text>
            <HStack
                justifyContent={'space-between'}
                my={4}
            >
                <InfoItem
                    label="Preço"
                    value={data.itemPrice.toString()}
                />
                <InfoItem
                    label="Marca"
                    value={data.itemBrand}
                />
                <InfoItem
                    label="Processador"
                    value={data.itemProcessor}
                />
            </HStack>
            <HStack
                marginTop={8}
            >
                <OptionButton
                    color="#8133E0"
                    text={"Vender"}
                    onClick={() => null}
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
                        onClick={() => null}
                        icon={<VscEdit
                            style={{
                                height: 20,
                                width: 20
                            }}
                        />}
                    />
                    <OptionButton
                        text={"Apagar"}
                        color="red"
                        onClick={handleOnDelete}
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