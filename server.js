const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "Pages")));


// Parse JSON data
app.use(express.json());


// Parse form data
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Pages", "index.html"));
});

app.get("/bikes", (req, res) => {
    res.sendFile(path.join(__dirname, "Pages", "bikes.html"));
});

app.get("/technology", (req, res) => {
    res.sendFile(path.join(__dirname, "Pages", "technology.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "Pages", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "Pages", "contact.html"));
});


app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.send("Message received");

});


app.get("/references", (req, res) => {
    res.sendFile(path.join(__dirname, "Pages", "references.html"));
});

app.listen(3000, () => {
    console.log("Voltra server running on http://localhost:3000");
});