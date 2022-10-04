
let start = 0;
let end = 13;

function funl(start,end,isPrime){

    let primeNumbers = []
    
    for(let i=start; i<=end; i++){
        if(isPrime(i)){
            primeNumbers.push(i)
        }
    }
    
    
    let EndingWith3 =[]

    for(let i=0; i<primeNumbers.length; i++){
        if(primeNumbers[i]%10==3){
            EndingWith3.push(primeNumbers[i])
        }
    }
    let totalOfEndingWith3 = 0

    for(x of EndingWith3){
        totalOfEndingWith3+=x;
    }
    
    return totalOfEndingWith3/EndingWith3.length

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

console.log(funl(start,end,isPrime))