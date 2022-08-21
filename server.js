const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/api/notes", (req, res) => {
  let newnote = req.body;
  newnote.id = uuidv4();
  fs.readFile("./db/db.json", (error, results) => {
    if (error) {
      throw error;
    }
    let notelist = JSON.parse(results);
    notelist.push(newnote);
    console.log(notelist);
    fs.writeFile("./db/db.json", JSON.stringify(notelist), (error, results) => {
      if (error) {
        throw error;
      }
      res.json(newnote);
    });
  });
});
//
app.listen(PORT, () => {
  console.log(`Listening on PORT: http://localhost:${PORT}/`);
});
