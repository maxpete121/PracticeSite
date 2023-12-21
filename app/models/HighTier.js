




export class HighTier{
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.buildType = data.buildType
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.specs = data.specs
        this.specsId = data.specsId 
    }

    get tierTemplate(){
        return`
        <div class="card col-2 m-1 text-center">
        <img class="w-75 h-50" src="${this.imgUrl}">
        <h3>${this.name}</h3>
        <h6>${this.description}</h6>
        <span class="d-flex">
        <h5>CPU:</h5>
        <h6>${this.specs[0].cpu}</h6>
        </span>
        <span class="d-flex">
        <h5>GPU:</h5>
        <h6>${this.specs[0].gpu}</h6>
        </span>
        <span class="d-flex align-items-center">
        <h5>RAM:</h5>
        <h6>${this.specs[0].ram}</h6>
        </span>
        <span>
        <button>Add To Cart</button>
        </span>
        </div>
        `
    }
}