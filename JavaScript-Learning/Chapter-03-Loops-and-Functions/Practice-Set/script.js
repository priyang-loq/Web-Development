// Q1
let obj = {
    harsh: 97,
    hari: 98,
    hore: 99
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("the marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
}
// Q2
for (let a in obj) {
    console.log("marks of " + a + " is " + obj[a])
}