const express = require("express");
const app = express();
const creds = require("./db");
const PORT = 3000;

app.use(express.json());

// Restaurants
app.post("/inputRestaurants", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error connecting", err.stack);
      }
      client.query(
        `INSERT INTO restaurants (id,name,address) VALUES ('${req.body.id},'${req.body.name}',${req.body.address})`,
        (err, result) => {
          if (err) {
            res.status(400).send(err.stack);
          }
          res.status(200).send(result);
        }
      );
    });
  });

app.get("/getRestaurants", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error connecting", err.stack);
    }
    client.query("SELECT * FROM restaurants", (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result.rows);
    });
  });
});

// Movies
app.post("/inputMovies", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error connecting", err.stack);
      }
      client.query(
        `INSERT INTO movies (id,name,address) VALUES ('${req.body.id},'${req.body.name}',${req.body.address})`,
        (err, result) => {
          if (err) {
            res.status(400).send(err.stack);
          }
          res.status(200).send(result);
        }
      );
    });
  });

  app.get("/getMovies", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error connecting", err.stack);
      }
      client.query("SELECT * FROM movies", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

app.listen(PORT, console.log(`Listening on port ${PORT}`));

