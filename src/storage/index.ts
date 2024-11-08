export default class LocalStorage {

    private storage = window.localStorage

    static shared = new LocalStorage()

    save<T>(key: string, data: T) {

        const dataSaved = this.get(key)

        if (dataSaved.length === 0) {
            this.storage.setItem(key, JSON.stringify([data]))
        } else {
            dataSaved.push(data)
            this.storage.setItem(key, JSON.stringify(dataSaved))
        }
    }

    get<T>(key: string): T[] {
        const dataStr = this.storage.getItem(key)

        if (dataStr) {
            const data: T[] = JSON.parse(dataStr)
            return data
        }
        return []
    }

    // Se eu adicionar o valor 0 (zero) ao position, será que elimina?
    delete<T>(key: string, position?: number) {
        if (position !== undefined) {
            const data = this.get<T>(key)
            if (data.length > 0) {
                const updatedData = data.filter(d => d !== data[position])
                this.storage.setItem(key, JSON.stringify(updatedData))
                console.log(`Eliminou os dados do position: ${position}`)
            }
        } else {
            this.storage.removeItem(key)
            console.log(`Eliminou todos os dados.`)
        }
    }
}