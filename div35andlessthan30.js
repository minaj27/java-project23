const arr =[3,5,7,15,3,12,30,4,45,50,75,100];

const result = arr.filter((item)=> item<30)
    .filter((item)=> item%15===0)
    .reduce((acc,curr)=> acc+(curr**2),0)

console.log(result);