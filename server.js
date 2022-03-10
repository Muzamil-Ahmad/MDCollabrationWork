const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
// const routes = require("./routes/tutorial.routes.js")(app);
debugger

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// simple route
const db = require("./models");
db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and re-sync db.");
});
app.get("/", (req, res) => {
  debugger
  res.json({message: "Welcome to your first project."});
});
// app.get("/index", (req, res) => {
//   res.json({message: "Welcome to zameer, muzamil and danish."});
// });
require("./routes/tutorial.routes.js")(app);
// app.use('/', routes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});