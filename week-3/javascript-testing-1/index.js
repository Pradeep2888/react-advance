

function sum(...args){
if(arguments.length===0){
    return "sum function without argument"
}
if(arguments.length===1){
    return "sum function needs atleast 2 argument"
}

// a=Number(a)
// b=Number(b)
// return Number((a+b).toFixed(1))
const sumValue=[...args].reduce((a,c)=>a+Number(c),0)
return Number(sumValue.toFixed(1))
}

module.exports=sum