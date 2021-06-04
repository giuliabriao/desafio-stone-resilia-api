const express = require("express");
let routes = require("./routes");
const cors = require("cors");
const { errors } = require("celebrate");

const app = express();
app.use(express.json()); //aqui ele vai receber o body no tipo json la no post
app.use(cors());
app.use(routes);
app.use(errors());

//Not found
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//catch all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(3333, () => console.log("Server is running!"));
