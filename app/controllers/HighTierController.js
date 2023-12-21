import { AppState } from "../AppState.js";
import { highTierService } from "../services/HighTierService.js";



function _drawTiers(){
    const allTiers = AppState.HighTier
    let content = ''
    allTiers.forEach(tier => content += tier.tierTemplate)
    document.getElementById('top-tier-view').innerHTML = content
}


export class HighTierController{
    constructor(){
        this.getTier()
        AppState.on('HighTier', _drawTiers)
    }

    async getTier(){
        try {
            highTierService.getTier()
        } catch (error) {
            
        }
    }
}