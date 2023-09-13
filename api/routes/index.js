const bodyParser = require("body-parser");

const produto = require("./produtoRoute");
const usuario = require("./usuariosRoutes.js");
const auth = require("./authRoutes.js");

module.exports = (app) => {
  app.use(bodyParser.json(), auth, produto, usuario);
};
