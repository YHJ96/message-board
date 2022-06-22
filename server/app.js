const express = require("express");
const path = require("path");
// const cors = require("cors");
const app = express();
const PORT = 3333;
const createPath = (fileURL = '') => path.join(__dirname, `../client/build`, fileURL);

const data =  [
  { title: "양희준", content: "코드스테이츠" },
  { title: "심소영", content: "코드스테이츠" },
  { title: "이유진", content: "코드스테이츠" }];

app.use(express.json());
app.use(express.static(createPath()));

app.get('/', (req, res) => res.sendFile(createPath("/index.html")));
// app.get('*', (req, res) => res.sendFile(createPath("/index.html")));

app.get('/list', (req, res) => res.status(200).json(data));

app.listen(PORT, () => {
  console.log("서버 작동중");
});