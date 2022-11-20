// boolean
let isDone = true;
isDone = false;
// Number
let price = 10;
// string
let first_name = "Masai";
let last_name = "School";
let full_name = `${first_name} ${last_name}`;
// Array
let arr = [1, 2, 3, 4, 5];
let arrOfString = ["1", "2", "3", "4", "5"];
let arrOfNumber = [1, 2, 3, 4, 5]; //Generic functions
const masai = {
    first_name: "Masai",
    last_name: "School",
    age: 18,
};
let arrOfCompany = [
    {
        first_name: "Masai",
        last_name: "School",
        age: 18,
    }
];
// Tuples
let tuple = ["Masai", 3, "School"];
// Enums -> group together a set of named constant
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
    Color[Color["YELLOW"] = 3] = "YELLOW"; //3,
})(Color || (Color = {}));
// other
let u;
let n;
let a;
// function sum(a,b){
//     return a+b
// }
function sum(a, b) {
    return a + b;
}
console.log(Math.floor(sum(2, 5)));
const printData = ({ first_name, last_name, age }) => {
    console.log(`${first_name} ${last_name}`);
};
printData(masai);
// Union ->Set Theory
// Either, Or
let output = ["masai", 3, "school"];
// Intersection
// And
const masaiStudent = {
    first_name: "masai",
    last_name: "school",
    age: 20,
    skills: "web-developer",
    isWorking: true,
};
//# sourceMappingURL=index.js.map