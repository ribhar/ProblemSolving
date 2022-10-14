class Splitter {
    constructor(items,itemsPerPage){
        this.items = items
        this.itemsPerPage = itemsPerPage
    }
    numberOfPages(){
        return this.items.length%this.itemsPerPage==0? this.items.length/this.itemsPerPage : Math.floor(this.items.length/this.itemsPerPage)+1
    }
    numberOfItemsInPage(){

    }
    indexOfPage(){

    }
    
}
let items = []
console.log(items.length)
let itemsPerPage = 6
const pageSplitter = new Splitter(items,itemsPerPage)

// console.log(pageSplitter)

// console.log(pageSplitter.numberOfPages())
// console.log(pageSplitter.numberOfItemsInPage())
// console.log(pageSplitter.indexOfPage())