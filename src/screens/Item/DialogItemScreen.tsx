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
import { Box, Grid, Input, Textarea } from "@chakra-ui/react"
import Select from 'react-select'

interface DialogItem {
    open: boolean
    onOpenChange: () => void
}

export default function DialogItem(props: DialogItem): JSX.Element {

    const {
        open,
        onOpenChange
    } = props

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

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
                    <Input
                        placeholder="Nome do artigo"
                        variant="subtle"
                        my={3}
                    />
                    <Textarea
                        variant="subtle"
                        placeholder="Descrição do artigo"
                    />

                    <Grid templateColumns="repeat(3, 1fr)" gap="6">
                        <Input
                            placeholder="Nome do artigo"
                            variant="subtle"
                            my={3}
                        />
                        <Box
                            my={3}
                            gap={0}
                        >

                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                name="color"
                                options={options}
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
                                options={options}
                            />
                        </Box>
                    </Grid>
                </DialogBody>
                <DialogFooter>
                    <Button
                        width={'full'}
                        bg={'purple.600'}
                        _active={{
                            scale: 0.99
                        }}
                    >
                        Salvar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}