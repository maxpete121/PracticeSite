import { AppState } from "../AppState.js"
import { Items } from "../models/Items.js"
import { itemService } from "../services/ItemsService.js"
import { Pop } from "../utils/Pop.js"

function _drawItemsATX(){
    const items = AppState.Item.filter(item => item.buildType == 'ATX')
    let content = ''
    const itemDraw = items.forEach(item => content += item.itemTemplate)
    document.getElementById('item-view').innerHTML = content
}

export class ItemController{
    constructor(){
        console.log('Item controller loaded')
        this.getItems()
        AppState.on('Item', _drawItemsATX)
    }

    async getItems(){
        try {
            itemService.getItems()
        } catch (error) {
            
        }
    }
}