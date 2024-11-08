import LocalStorage from "@/storage";
import { Item, ItemType } from "@/types/ItemType";

export default class ItemDao {

    private key: string = "items"

    saveItem(item: ItemType) {
        LocalStorage.shared.save(this.key, item)
    }

    getAllItems(): Item[] {
        return LocalStorage.shared.get(this.key)
    }

    deleteItem(position?: number) {
        LocalStorage.shared.delete(this.key, position)
    }
}