sum()
function sum(){
    console.log ("hey ali");
}
function y(){
    var x =66;
    function student(){
        console.log(a + 10);
    }
}
y()

let a=[2,3,4,5]
// console.log(a);
let b=new Array(2,3,4,5,6);
let c = b.map(item =>item *2)

console.log(b)
console.log(c)

let fruits = ["Apple", "Mango", "Orange"];
let m =fruits.map(all => all.toLocaleLowerCase())
console.log(m)

let nuumbers=[2,3,4,5,8];
let oddNumbers = nuumbers .filter(item => item%2 !=0)
console.log(oddNumbers)

// let v=[6,7,8,9];
// console.log(v[3]);

let person={
    name:"Joan",
    age:"29",
    gender:"female",

    hobby: function(activity) {
        return `my name is ${this.name} and i love ${activity}`
    }
}
console.log(person);
let student=Object.create(person);
student["name"] = "Mary";
student.age =23;
console.log(student.name);
console.log(student.age);
console.log(person.gender);
person.country = "Malysia";
person["nationality"] = "Malaysian";
console.log(person);
console.log(person.hobby("coding"));
console.log(person.hobby("coding"));