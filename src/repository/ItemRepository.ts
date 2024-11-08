import ItemDao from "@/dao/ItemDao"
import { Item, ItemType } from "@/types/ItemType"

export default class ItemRepository {

    static shared = new ItemRepository()

    saveItem(itemName: string, description: string, price: number, brand: string, processor: string, image: string): Promise<Item> {
        return new Promise((resolve, reject) => {
            if (itemName === "") {
                reject("Introduza o nome do item")
            } else if (description === "") {
                reject("Introduza a descrição do item")
            } else if (price === 0 || price === undefined || price === null) {
                reject("Introduza o preço do item")
            } else if (brand === "") {
                reject("Introduza a marca do item")
            } else if (processor === "") {
                reject("Introduza o processador do item")
            } else if (image === "") {
                reject("Introduza a imagem do item")
            } else {

                const item = new ItemType(itemName, description, price, brand, processor, image)
                const dao = new ItemDao()
                setTimeout(() => {
                    dao.saveItem(item)
                    resolve(item as unknown as Item)
                }, 2000);
            }
        })
    }

    getAllItems() {
        const dao = new ItemDao()
        return dao.getAllItems()
    }

    deleteItem(position?: number) {
        const dao = new ItemDao()
        dao.deleteItem(position)
    }
}