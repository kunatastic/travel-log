const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandling = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  const err = {
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥘" : error.stack,
  };
  res.json(err);
};

module.exports = { notFound, errorHandling };
