const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// app.set("images", path.join(__dirname, "images"));

let posts = [
  {
    id: uuidv4(),
    username: "Samridhi Rawat",
    content: "Practicing yoga regularly has boosted my self-esteem and made me more aware of my body’s strength and flexibility.",
  },
  {
    id: uuidv4(),
    username: "Sujal Singh Rawat",
    content: "The mindfulness I’ve gained from yoga is incredible. It’s helped me manage stress and feel more centered ",
  },
  {
    id: uuidv4(),
    username: "Sakshi Jaiswal",
    content: "I appreciate how yoga offers a gentle yet effective way to stay fit. It’s great for both my physical health and mental clarity",
  },
];

app.post("/aboutus", (req, res) => {
  console.log(req.body);

  res.redirect("/yoga");
});

app.get("/yoga/aboutus", (req, res) => {
  res.render("aboutus.ejs");
});

app.get("/",(req,res)=>{
  res.render("homepage.ejs");
  
})

app.get("/yoga", (req, res) => {
  res.render("homepage.ejs");
});

app.get("/yoga/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/yoga/gallery", (req, res) => {
  res.render("gallery.ejs");
});

app.get("/yoga/instuctor", (req, res) => {
  res.render("instuctor.ejs");
});

app.get("/yoga/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/yoga/class", (req, res) => {
  res.render("class.ejs");
});




app.listen(port, () => {
  console.log("Port is Listening : 8000");
});
