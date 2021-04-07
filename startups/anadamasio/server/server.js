const express = require("express");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");

require("dotenv").config();
const apiKey = process.env.API_KEY;

app.use(cors()); // este comando serve para permitir que outros domínios possam aceder a esta API
app.use(express.json()); // este comando faz com que o express use json

app.get("/plantas", async (req, res) => {
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${apiKey}`
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      res.send(json);
    }
  } catch (error) {
    let obj = {
      name: "Ocorreu um erro no servidor!",
      info: error,
    };
    res.json(obj);
  }
});

app.listen(1997, () => {
  console.log("O server está à escuta");
});
