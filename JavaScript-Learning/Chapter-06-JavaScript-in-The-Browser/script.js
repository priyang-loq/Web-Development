// console.log(console);
// console.clear();
// console.assert|(5>56);
// obj = {a:1,b:3,c:5};
// console.table(obj);
// console.warn("warning");
// console.error("eroor");
// console.info("info0");

alert("Welcome!");

let name = prompt("Enter your name:");

let permission = confirm("Do you want to continue?");

if (permission) {
    alert("Hello " + name + "! Let's start.");
} else {
    alert("Goodbye " + name + "!");
}