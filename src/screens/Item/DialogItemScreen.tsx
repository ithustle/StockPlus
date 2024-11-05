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

interface DialogItem {
    open: boolean
    onOpenChange: () => void
}

export default function DialogItem(props: DialogItem): JSX.Element {

    const {
        open,
        onOpenChange
    } = props

    return (
        <DialogRoot
            open={open} 
            onOpenChange={onOpenChange}
            size={'md'}
        >
            <DialogBackdrop />
            <DialogTrigger />
            <DialogContent>
                <DialogCloseTrigger />
                <DialogHeader>
                    <DialogTitle />
                </DialogHeader>
                <DialogBody />
                <DialogFooter />
            </DialogContent>
        </DialogRoot>
    )
}