const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticado = require("../middleware/autenticado");

const router = Router();

router.use(autenticado);

router
  .get("/usuarios", UsuarioController.buscarTodosUsuarios)
  .get("/usuarios/id/:id", UsuarioController.buscarUsuarioPorId)

  .post("/usuarios", UsuarioController.cadastrar)
  .post("/usuarios/:id/restaura", UsuarioController.restauraUsuario)

  .put("/usuarios/id/:id", UsuarioController.editarUsuario)
  .delete("/usuarios/id/:id", UsuarioController.apagaUsuario);

module.exports = router;
