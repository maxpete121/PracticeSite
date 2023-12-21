import { AppState } from "../AppState.js"
import { Items } from "../models/Items.js"
import { itemService } from "../services/ItemsService.js"


export class ItemController{
    constructor(){
        console.log('Item controller loaded')
        this.getItems()
    }

    async getItems(){
        try {
            itemService.getItems()
        } catch (error) {
            
        }
    }
}