// Here we call an instance of express by requiring it
const express = require("express");

// Here we call express as a function
const app = express();

// Defining the PORT our app will use
const PORT = 3000;

// Path is a Node module that helps us deal with the file and directory paths
const path = require("path");

// Middleware are functions native to Express that run while the server is running

// express.json() is used to automatically parse JSON files for us
app.use(express.json());

// URL encoding refers to how JavaScript interprets data sent and coded into a url: https://www.w3schools.com/tags/ref_urlencode.ASP
app.use(express.urlencoded({ extended: true }));

// Using the Express static middleware, express will serve static html files in whatever folder is being pointed to

// app.use(express.static(path.join(__dirname, "public")));

// Importing our user's array and displaying those to our /api/users path
const { villains, heros } = require("./data/users.json");

app.get("/api/heros", (req, res) => res.json(heros));
app.get("/api/villains", (req, res) => res.json(villains));

// Finally, we ask our express app to listen to a certain port where our files can be posted
app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
