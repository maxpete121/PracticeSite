




export class Items{
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.specs = data.specs
        this.specsId = data.specsId
    }

    get itemTemplate(){
        return`
        <div class="card col-2 m-2">
        <img class="img-fluid h-50" src="${this.imgUrl}">
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