import { For, Heading, HStack, Stack, useDisclosure } from "@chakra-ui/react";
import CardItem from "./components/CardItem";
import FloatButton from "./components/FloatButton";
import DialogItem from "../Item/DialogItemScreen";

export default function HomeScreen(): JSX.Element {

    const { open, onClose, onOpen } = useDisclosure()

    const arrayItems: string[] = ["Joel", "Luana", "Lukeni"]

    return (
        <Stack
            p={10}
        >
            <Heading
                fontSize={'4xl'}
                color={'#8133E0'}
            >
                Gestor de Stock e vendas
            </Heading>
            <FloatButton 
                onOpenDialog={onOpen}
            />

            <HStack
                py={10}
                gap={8}
            >
                <For each={arrayItems}>
                    {(item) => (
                        <CardItem
                            key={item}
                        />
                    )}
                </For>

            </HStack>
            <DialogItem 
                open={open}
                onOpenChange={onClose}
            />
        </Stack>
    )
}