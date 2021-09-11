require('dotenv').config();

const token = process.env.API_TOKEN;
const URL = process.env.URL;
console.log(process.env)
const {createClient} = require("@supabase/supabase-js");
const supabase = createClient(URL, token);
const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3002;

app.post("/createStock", async (req, res) => {
    const { data, error } = await supabase.from("Stonks").insert([req.body]);
    res.send(console.log(`here is the stock ${req.body.name}`));
});

app.get("/viewStock", async (req, res) => {
    const { data, error } = await supabase.from("Stonks").select();
    res.send(data);
});

app.put("/updateStock/:id", async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
        .from("Stonks")
        .update(req.body)
        .match({ id: id});
    res.send(data)
});

app.delete("/deleteStock/:id", async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
        .from("Stonks")
        .delete()
        .match({ id: id});
    res.send(data);
})









app.listen(PORT, console.log(`this is port ${PORT}`));