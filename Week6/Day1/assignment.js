const cowsay = require('cowsay');
const express = require('express');
const app = express();
const PORT = 3001;

app.post('/sendCowUserName', (req, res) => {
    res.send(
        cowsay.say({
            text: "Adding Cow User",
            e: "oO",
            T: "U",
        })
    )});
app.post('/sendCowAppointment', (req, res) => {
    res.send(
        cowsay.think({
            text: "Creating Cow Appointment",
            e: "oO",
            T: "U",
        })
    )});
app.get('/getCowUserName', (req, res) => {
    res.send(
        cowsay.say({
            text: "Getting Cow UserName",
            e: "oO",
            T: "U",
        })
    )});
app.get('/getCowAppointment', (req, res) => {
    res.send(
        cowsay.think({
            text: "Getting Cow Appointment",
            e: "oO",
            T: "U",
        })
    )});
app.delete('/deleteCowUser', (req, res) => {
    console.log("Cow has been deleted");
        res.send("Cow has been deleted")
});





app.listen(PORT, console.log(`this is port ${PORT}`));