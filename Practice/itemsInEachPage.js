class Splitter {
    constructor(items,itemsPerPage){
        this.items = items
        this.itemsPerPage = itemsPerPage
    }
}
let items = [1,2,"ritik","aakash",3]
let itemsPerPage = 2
const pageSplitter = new Splitter(items,itemsPerPage)

console.log(pageSplitter)