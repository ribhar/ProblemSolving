class Splitter {
    constructor(items,itemsPerPage){
        this.items = items
        this.itemsPerPage = itemsPerPage
    }
    numberOfPages(){
        return this.items.length%this.itemsPerPage==0? this.items.length/this.itemsPerPage : Math.floor(this.items.length/this.itemsPerPage)//+1
    }
    
}
let items = [1,2,"ritik","aakash",3]
let itemsPerPage = 6
const pageSplitter = new Splitter(items,itemsPerPage)

// console.log(pageSplitter)

console.log(pageSplitter.numberOfPages())