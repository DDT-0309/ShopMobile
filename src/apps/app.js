const express = require("express");
const app = express();
const session = require("express-session");
const config = require("config");
//Session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.get("app.session_key"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
//Form
app.use(express.urlencoded({extended:true}));
//Static
app.use("/static", express.static(config.get("app.static_folder")));
//View
app.set("views", config.get("app.views_folder"));
app.set("view engine", config.get("app.views_engine"));

//Router
app.use(require(config.get("app.router")));


module.exports = app; 

