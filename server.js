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

app.get("/home", (req, res) => {
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


// 404 - Page Not Found

app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>404 - Page Not Found</title>

            <script src="https://cdn.tailwindcss.com"></script>
        </head>

        <body class="min-h-screen bg-zinc-950 text-white">

            <div class="flex min-h-screen items-center justify-center px-6">

                <div class="text-center">

                    <p class="mb-3 text-8xl font-bold text-lime-300">
                        404
                    </p>

                    <h1 class="mb-4 text-3xl font-semibold">
                        Page Not Found
                    </h1>

                    <p class="mb-8 text-gray-400">
                        Sorry, the page you are looking for does not exist.
                    </p>

                    <a
                        href="/"
                        class="inline-block rounded-full
                               bg-lime-300 px-6 py-3
                               font-semibold text-black
                               transition hover:bg-lime-400"
                    >
                        Back to Home
                    </a>

                </div>

            </div>

        </body>

        </html>
    `);
});

app.listen(3000, () => {
    console.log("Voltra server running on http://localhost:3000");
});