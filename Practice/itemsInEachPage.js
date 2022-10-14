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
        if(n>=this.numberOfPages()) return -1

        if(n==(this.numberOfPages()-1)){
            if(this.items.length%this.itemsPerPage==0) return this.itemsPerPage
            else return this.items.length%this.itemsPerPage
        } 
        else return this.itemsPerPage

        
    }
    indexOfPage(){
        
    }
    
}
let items = [1,2,"ritik","aakash",3,4,3,5,6] // 9
let itemsPerPage = 2
const pageSplitter = new Splitter(items,itemsPerPage)

// console.log(pageSplitter)

console.log(pageSplitter.numberOfPages())
console.log(pageSplitter.numberOfItemsInPage(4))
// console.log(pageSplitter.indexOfPage())