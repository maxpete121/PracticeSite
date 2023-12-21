




export class Items{
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.specsId = data.specsId
    }

    get itemTemplate(){
        return`
        <div>
        <h4>${this.name}</h4>
        </div>
        `
    }
}