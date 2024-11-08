import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
    DialogBackdrop,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from "@/components/ui/file-button"
import ItemRepository from "@/repository/ItemRepository"
import { Item } from "@/types/ItemType"
import { Box, Grid, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { HiUpload } from "react-icons/hi"
import Select, { SingleValue } from 'react-select'

interface DialogItem {
    open: boolean
    onOpenChange: () => void
    onItemSave: (item: Item) => void
}

export default function DialogItem(props: DialogItem): JSX.Element {

    const {
        open,
        onOpenChange,
        onItemSave
    } = props

    const [itemName, setItemName] = useState<string>("")
    const [itemDescription, setItemDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [brand, setBrand] = useState<SingleValue<{ value: string, label: string }>>({ value: "", label: "" })
    const [processor, setProcessor] = useState<SingleValue<{ value: string, label: string }>>({ value: "", label: "" })
    const [image, setImage] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const brandOptions = [
        { value: 'HP', label: 'HP' },
        { value: 'Apple', label: 'Apple' },
        { value: 'Dell', label: 'Dell' },
        { value: 'Lenovo', label: 'Lenovo' },
        { value: 'Acer', label: 'Acer' },
        { value: 'Asus', label: 'Asus' },
        { value: 'Razer', label: 'Razer' },
        { value: 'Samsung', label: 'Samsung' },
        { value: 'Toshiba', label: 'Toshiba' },
    ]

    const processorOptions = [
        { value: 'i3', label: 'i3' },
        { value: 'i5', label: 'i5' },
        { value: 'i7', label: 'i7' },
        { value: 'i9', label: 'i9' },
        { value: 'M1', label: 'M1' },
        { value: 'M2', label: 'M2' },
        { value: 'M3', label: 'M3' },
        { value: 'M4', label: 'M4' },
        { value: 'Amd Ryzen', label: 'Amd Ryzen' }
    ]

    function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {

		const reader = new FileReader();

		const file = e.target.files?.[0];
		const f = e.target.files as FileList

		reader.onload = (e: ProgressEvent<FileReader>) => {
            setImage(e.target?.result as string);
        };
        reader.readAsDataURL(f[0]);
	}

    async function handleSaveItem() {
        setLoading(true)
        ItemRepository.shared.saveItem(itemName, itemDescription, price, brand?.value as string, processor?.value as string, image)
            .then((itemSaved) => {
                setLoading(false)
                onItemSave(itemSaved)
                setItemName("")
                setItemDescription("")
                setPrice(0)
                setBrand({ value: "", label: "" })
                setProcessor({ value: "", label: "" })
                setImage("")
                setMessage("")
                onOpenChange()
            })
            .catch(error => {
                setMessage(error)
                setLoading(false)
            })
    }

    return (
        <DialogRoot
            open={open}
            onOpenChange={onOpenChange}
            size={'md'}
            placement={'center'}
        >
            <DialogBackdrop />
            <DialogTrigger />
            <DialogContent>
                <DialogCloseTrigger />
                <DialogHeader>
                    <DialogTitle color={'purple.600'}>Adicionar artigos</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <FileUploadRoot onChange={onChangeImage}>
                        <FileUploadTrigger asChild>
                            <Button variant="outline" size="sm">
                                <HiUpload /> Upload file
                            </Button>
                        </FileUploadTrigger>
                        <FileUploadList />
                    </FileUploadRoot>
                    <Input
                        placeholder="Nome do artigo"
                        variant="subtle"
                        my={3}
                        onChange={e => setItemName(e.target.value)}
                        value={itemName}
                    />
                    <Textarea
                        variant="subtle"
                        placeholder="Descrição do artigo"
                        onChange={e => setItemDescription(e.target.value)}
                        value={itemDescription}
                    />

                    <Grid templateColumns="repeat(3, 1fr)" gap="6">
                        <Input
                            placeholder="Preço"
                            type="number"
                            variant="subtle"
                            my={3}
                            onChange={e => setPrice(Number(e.target.value))}
                            value={price}
                        />
                        <Box
                            my={3}
                            gap={0}
                        >
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                name="color"
                                options={brandOptions}
                                onChange={e => setBrand(e)}
                                value={brand}
                            />
                        </Box>
                        <Box
                            my={3}
                            gap={0}
                        >

                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                name="color"
                                options={processorOptions}
                                onChange={e => setProcessor(e)}
                                value={processor}
                            />
                        </Box>
                    </Grid>
                </DialogBody>
                <DialogFooter flexDir={'column'}>
                    <Button
                        width={'full'}
                        bg={'purple.600'}
                        _active={{
                            scale: 0.99
                        }}
                        loading={loading}
                        loadingText="A salvar o item"
                        onClick={handleSaveItem}
                    >
                        Salvar
                    </Button>
                    {message !== "" ? <Alert status={'error'} title="Erro">
                        {message}
                    </Alert> : null}
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}