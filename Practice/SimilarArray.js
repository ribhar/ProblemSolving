let a  = [1,1,1,2,3,4,1]
let b  = [1,1,1,2,3,4,1]

console.log(funl(a,b))

function funl(a,b){
  let obj1 = {}
  let obj2 = {}
  for(let i=0; i<a.length; i++){
    if(obj1[a[i]]) obj1[a[i]]+=1
    else obj1[a[i]] = 1
  }
  for(let i=0; i<b.length; i++){
    if(obj2[b[i]]) obj2[b[i]]+=1
    else obj2[b[i]] = 1
  }
  
  for(let x in obj1){
    
    if(obj2[x]!==obj1[x]) return false
  }
  return true
}