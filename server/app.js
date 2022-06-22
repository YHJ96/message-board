const express = require("express");
const path = require("path");
// const cors = require("cors");
const app = express();
const PORT = 5000;
const createPath = (fileURL = '') => path.join(__dirname, `../client/build`, fileURL);

app.use(express.json());
app.use(express.static(createPath()));

app.listen(PORT, () => {
  console.log("서버 작동중");
});

app.get('/', (req, res) => res.sendFile(createPath("/index.html")));
app.get('*', (req, res) => res.sendFile(createPath("/index.html")));