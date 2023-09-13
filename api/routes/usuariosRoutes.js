const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticado = require("../middlware/autenticado");

const router = Router();
router.use(autenticado);

router
  .post("/usuarios", UsuarioController.cadastrar)
  .get("/usuarios", UsuarioController.pegaTodasUsuarios)
  .get("/usuarios/id/:id", UsuarioController.pegaUsuarioPorId)
  .put("/usuarios/id/:id", UsuarioController.atualizaUsuario)
  .delete("/usuarios/id/:id", UsuarioController.apagaUsuario);

module.exports = router;
