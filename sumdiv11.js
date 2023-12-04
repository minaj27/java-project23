const elems =[32,55,42,75,70,41,100,30,33,15,45];

const result = elems.filter((item)=> item%11===0)
.reduce((acc,curr)=> acc+curr);
console.log(result);
