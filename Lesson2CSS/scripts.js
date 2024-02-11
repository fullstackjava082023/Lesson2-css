console.log("hello world!");
const hours = 24;
console.log("number of minutes in the day" + hours*60);



const func1 = function(name, age) {
    console.log("My name is: " + name + " and my age is " + age);
}
func1("John", 20);

const func2 = (name, age) => {
    console.log("My name is: " + name + " and my age is " + age);
}