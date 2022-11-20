// boolean
let isDone:boolean=true;
isDone=false;

// Number
let price:number=10;

// string
let first_name:string="Masai";
let last_name:string="School";
let full_name= `${first_name} ${last_name}`;

// Array
let arr: number[]=[1,2,3,4,5]
let arrOfString: string[]=["1","2","3","4","5"]
let arrOfNumber: Array<number>=[1,2,3,4,5]  //Generic functions
// let arrOfObjects: 

//Object

// interface and type 

type company={
    first_name:string;
    last_name:string;
    age:number;
}
// interface company={
//     first_name:string;
//     last_name:string;
//     age:number;
// }

type softwareDeveloper={
    skills:string,
    isWorking:boolean,
}

const masai:company={
    first_name:"Masai",
    last_name:"School",
    age:18,
}

let arrOfCompany:company[]=[
    {
        first_name:"Masai",
        last_name:"School",
        age:18,
    }   
]

// Tuples

let tuple:[string,number,string]=["Masai",3,"School"]

// Enums -> group together a set of named constant

enum Color{
    RED,//0
    GREEN,//2
    BLUE,//2
    YELLOW//3,
}

// other
let u:undefined;
let n:null;
let a:any;

// function sum(a,b){
//     return a+b
// }

function sum(a:number,b:number):number{
    return a+b
}

console.log(Math.floor(sum(2,5)))
const printData=({first_name,last_name,age}:company)=>{
    console.log(`${first_name} ${last_name}`)
}
printData(masai)

// Union ->Set Theory
// Either, Or
let output:(number | string ) []=["masai",3,"school"]

// Intersection
// And

const masaiStudent:company &softwareDeveloper={
    first_name:"masai",
    last_name:"school",
    age:20,
    skills:"web-developer",
    isWorking:true,
}