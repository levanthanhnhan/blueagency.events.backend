var express = require("express");
var logger = require("morgan");
var cors = require("cors");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var apiPath = "/api/v1";
var clientsRouter = require("./routers/clients.router");
var feedbackRouter = require("./routers/feedback.router");
var servicesRouter = require("./routers/services.router");

app.use(apiPath, clientsRouter);
app.use(apiPath, feedbackRouter);
app.use(apiPath, servicesRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = app;
