const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const { notFound, errorHandling } = require("./middleware");

// mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.get("/", (req, res) => {
  res.json({
    message: "HELL0 W04ld!",
  });
});

app.use(notFound);

app.use(errorHandling);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
