const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const { notFound, errorHandling } = require("./middleware");
const logRoutes = require("./api/log");

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use("/api/log", logRoutes);

app.use(notFound);
app.use(errorHandling);

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!!!");
  }
);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
