import { AppState } from "../AppState.js"
import { Items } from "../models/Items.js"
import { itemService } from "../services/ItemsService.js"

function _drawItems(){
    const items = AppState.Item
    let content = ''
    const itemDraw = items.forEach(item => content += item.itemTemplate)
    document.getElementById('item-view').innerHTML = content
}

export class ItemController{
    constructor(){
        console.log('Item controller loaded')
        this.getItems()
        AppState.on('Item', _drawItems)
    }

    async getItems(){
        try {
            itemService.getItems()
        } catch (error) {
            
        }
    }
}