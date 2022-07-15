class Student{
    constructor(name,age,gender){
        this.name= name
        this.age=age
        this.gender=gender

    }
}
let studentEphy = new Student("Ephy", 33, "female");
console.log(studentEphy);

Student.prototype.nationality ="Kenyan"
console.log(studentEphy.nationality);

Student.prototype.nationality = function(nationality){
    return `I am ${nationality}`
}
console.log(studentEphy.nationality("ugandan"));