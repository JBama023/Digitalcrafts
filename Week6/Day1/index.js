const express = require('express');
const app = express();

app.post("/", (req, res) => {
  res.send(`<h1>Hello World!<h1>`);
});
 
app.put("/cats", (req, res) => {
    res.send(`<button>ThisaButton<button>`);
});
app.delete("/dogs", (req, res) => {
    res.send(`<p>Woof!<p>`);
});
app.copy("/cats_and_dogs", (req, res) => {
    res.send(`<h3>Dogs and cats living together...mass hysteria!!<h3>`);
});

app.listen(3000);

// const cowsay = require("cowsay")
// console.log(cowsay.say( {
//     text : "I'm a moooodule",
//     e: "oO",
//     T: "U ",
// }))
