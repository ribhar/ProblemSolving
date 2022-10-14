class Splitter {
    constructor(items,itemsPerPage){
        this.items = items
        this.itemsPerPage = itemsPerPage
    }
    numberOfPages(){
        return this.items.length%this.itemsPerPage==0? this.items.length/this.itemsPerPage : Math.floor(this.items.length/this.itemsPerPage)+1
    }
    numberOfItemsInPage(n){
        if(n<0) return -1
        return this.numberOfPages==n? this.items%this.itemsPerPage : this.itemsPerPage
        
    }
    indexOfPage(){
        
    }
    
}
let items = [1,2,"ritik","aakash",3]
let itemsPerPage = 2
const pageSplitter = new Splitter(items,itemsPerPage)

// console.log(pageSplitter)

// console.log(pageSplitter.numberOfPages())
console.log(pageSplitter.numberOfItemsInPage(-1))
// console.log(pageSplitter.indexOfPage())