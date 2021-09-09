const PORT = 3000
const {createClient} = require("@supabase/supabase-js")
const supabase = createClient(
    "https://mxakcphctxajogkuteth.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
  );
const express = require("express");
const app = express();

app.use(express.json());

// CREATE
app.post("/createStudent", async (req, res) => {
    console.log(req.body);
    const {data, error} = await supabase.from("studentData").insert([req.body])
    res.send(console.log(`the user is ${req.body.name}`))
   
    
})
// READ
app.get("/readStudent", async (req, res) => {
    const {data, error} = await supabase.from("studentData").select();
    res.send(data);
})
// UPDATE
app.put("/updateStudent/:params", async (req, res) => {
    const id = req.params.student.id
    const {data, error} = await supabase
    .from("studentData")
    .match({id:id})
    .update({
        
            name: "Jamie",
            lastName: "Busby",
            userID: 128822232,
            address: "123 main st",
            contactInfo: {
                phone: "123-123-1233",
                email: "joe@digitalcrafts.com"
            }
        
    })
    res.send(data);
})
// DELETE
app.delete("/deleteStudent/:params", async (req, res) => {
    const id = req.params.student.id
    const {data, error} = await supabase
    .from("studentData")
    .delete({id:id})
    .match({
        
            name: "Jamie",
            lastName: "Busby",
            userID: 128822232,
            address: "123 main st",
            contactInfo: {
                phone: "123-123-1233",
                email: "joe@digitalcrafts.com"
            }
        
    })
    res.send(data);
})


app.listen(PORT, console.log(`listening on port ${PORT}`))