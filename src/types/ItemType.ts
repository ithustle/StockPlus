export type Item = {
    itemImage: string
    itemName: string
    itemDescription: string
    itemPrice: number
    itemBrand: string
    itemProcessor: string
}

export class ItemType {

    private itemImage: string
    private itemName: string
    private itemDescription: string
    private itemPrice: number
    private itemBrand: string
    private itemProcessor: string

    constructor(itemName: string, itemDescription: string, itemPrice: number, itemBrand: string, itemProcessor: string, itemImage: string) {
        this.itemName = itemName
        this.itemDescription = itemDescription
        this.itemPrice = itemPrice
        this.itemBrand = itemBrand
        this.itemProcessor = itemProcessor
        this.itemImage = itemImage
    }

    getItemName() {
        return this.itemName
    }

    getItemDescription() {
        return this.itemDescription
    }

    getItemPrice() {
        return this.itemPrice
    }

    getItemBrand() {
        return this.itemBrand
    }

    getItemProcessor() {
        return this.itemProcessor
    }

    getItemImage() {
        return this.itemImage
    }
}