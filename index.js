import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://dog.ceo/api/breeds/image/random";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { 
      url: result.data.message  
    });    
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.post("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
      url: result.data.message,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
