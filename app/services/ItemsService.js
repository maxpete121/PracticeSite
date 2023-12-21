import { api } from "./AxiosService.js"
import { Items } from "../models/Items.js"
import { AppState } from "../AppState.js"



class ItemService{
    async getItems(){
        const response = await api.get('api/items')
        console.log(response.data)
        const newItems = response.data.map(items => new Items(items))
        console.log(newItems)
        AppState.Item = newItems
    }
}

export const itemService = new ItemService()