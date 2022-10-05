let start = 0;
let end = 13;

function funl(start,end){

    let primeNumbers = []
    
    let EndingWith3 =[]
    let totalOfEndingWith3 = 0
    for(let i=start; i<=end; i++){
        if(i%10!==3){
            continue
        }
        if(isPrime(i)){
            EndingWith3.push(i)
            totalOfEndingWith3+=i
        }
    }
    
    function isPrime(n){
        if(n==1){
            return false
        }else if(n==2){
            return true
        }else {
            for(let i=2; i<n; i++){
                if(n%i==0){
                    return false
                }
            }
            return true
        }
    }
    
    return totalOfEndingWith3/EndingWith3.length

}


console.log(funl(start,end))