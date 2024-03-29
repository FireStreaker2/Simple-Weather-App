const path = require("path");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config();

const allowedOrigins = ["http://localhost:3001", "http://localhost:3000", `http://localhost:${port}`, "https://swa.firestreaker2.gq"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

app.post("/api", (req, res) => {
    var location = req.body.q;
    const key = process.env.KEY;
    var api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

    if (!location) {
        res.status(500).json({ Message: "Internal Server Error" });
    }

    axios.get(api)
    .then(response => {
        res.json({ Message: response.data });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Message: "Internal Server Error" });
    });
});

if (fs.existsSync("./build/index.html")) {
    app.use(express.static(path.resolve(__dirname, "./build")));
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./build", "index.html"));
    });

    app.get("/settings", (req, res) => {
      res.sendFile(path.resolve(__dirname, "./build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});