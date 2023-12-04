const elems =[32,55,42,75,70,41,100,30,33,15,45];

const result = elems.filter((item)=> item%5===0 && item%3===0);
//const result = elems.filter((item)=> item%15===0);another trick..5*3

console.log(result);