const Sequelize = require("sequelize");
const { JamieToDo } = require("./models");
console.log(JamieToDo);
const express = require("express");
const app = express();
const PORT = 3020;

app.use(express.json());

app.post("/create_list", async (req, res) => {
    const {List} = req.body;
    const newList = await JamieToDo.create({
        List: List,
    });
    res.send({
        id: newList.id,
    })
    res.send("List Created")
});

app.post("/get_list", async (req, res) => {
    const lists = await JamieToDo.findAll();
    res.send(lists);
});


app.post("/update_list/:id", async (req, res) => {
    const list = await JamieToDo.update(req.body, {
        where: {
            id:req.params.id,
        },
    });
    res.send(list)
});

app.post("/delete_list/:id", async (req, res) => {
    const list = await JamieToDo.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.send("Deleted");
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));