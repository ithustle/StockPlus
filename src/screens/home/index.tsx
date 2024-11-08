import { For, Grid, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import CardItem from "./components/CardItem";
import FloatButton from "./components/FloatButton";
import DialogItem from "../Item/DialogItemScreen";
import { useEffect, useState } from "react";
import { Item } from "@/types/ItemType";
import ItemRepository from "@/repository/ItemRepository";

export default function HomeScreen(): JSX.Element {

    const { open, onClose, onOpen } = useDisclosure()
    const [allItems, setAllItems] = useState<Item[]>([])

    useEffect(() => {
        const data = ItemRepository.shared.getAllItems()
        setAllItems(data)
    }, [])

    function onItemSave(item: Item) {
        setAllItems(state => {
            const data = state
            data.push(item)
            return data
        })
    }

    function onDeleteItem(position: number) {
        ItemRepository.shared.deleteItem(position)
        setAllItems(state => {
            const data = state.filter(d => d !== state[position])
            return data
        })
    }

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

            <Grid templateColumns="repeat(3, 1fr)" gap="6">
                <For each={allItems}>
                    {(item, index) => (
                        <CardItem
                            key={item.itemName}
                            position={index}
                            data={item}
                            onDeleteItem={onDeleteItem}
                        />
                    )}
                </For>
            </Grid>
            <DialogItem
                open={open}
                onOpenChange={onClose}
                onItemSave={onItemSave}
            />
        </Stack>
    )
}