const Sequelize = require("sequelize");
const {Users} = require("./models");
console.log(Users);
const express = require("express");
const app = express();
const PORT = 3011;

app.use(express.json());

app.post("/create_users", async (req, res) => {
    const {firstName,lastName,email} = req.body;
    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    res.send({
id: newUser.id,
    })
    res.send(`Inserted New User with ${newUser.firstName}`)
});

app.post("/get_users", async (req, res) => {
    const users = await Users.findAll();
    res.send(users);
});

app.post("/get_users_by_lastname", async (req, res) => {
    const users = await Users.findAll({
        attributes: ["lastName"],
    });
    res.send(users);
});

app.post("/get_users/:id", async (req, res) => {
    const user = await Users.findByPK(req.params.id)
    res.send(user);
});

app.post("/update_users/:id", async (req, res) => {
    const user = await Users.update(req.body, {
        where: {
            id:req.params.id,
        },
    });
    res.send(user)
});

app.post("/delete_user/:id", async (req, res) => {
    const user = await Users.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.send("Deleted");
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));