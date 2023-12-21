import { AppState } from "../AppState.js"
import { HighTier } from "../models/HighTier.js"
import { api } from "./AxiosService.js"





class HighTierService{

    async getTier(){
        const response = await api.get('api/highTier')
        const tiers = response.data.map(tier => new HighTier(tier))
        AppState.HighTier = tiers
    }
}


export const highTierService = new HighTierService()