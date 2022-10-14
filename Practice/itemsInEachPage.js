class Splitter {
    constructor(items,itemsPerPage){
        this.items = items
        this.itemsPerPage = itemsPerPage
    }
    numberOfPages(){
        return this.items%this.itemsPerPage==0? this.items/this.itemsPerPage : this.items/this.itemsPerPage+1
    }
    
}
let items = [1,2,"ritik","aakash",3]
let itemsPerPage = 2
const pageSplitter = new Splitter(items,itemsPerPage)

// console.log(pageSplitter)

console.log(pageSplitter.numberOfPages())