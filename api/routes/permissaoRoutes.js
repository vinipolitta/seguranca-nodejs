const { Router } = require("express");
const permissaoController = require("../controllers/permissaoController");
const autenticado = require("../middlware/autenticado");

const router = Router();
// router.use(autenticado);

router
  .post("/permissao", permissaoController.criaPermissao)
  .get("/permissao", permissaoController.pegaTodasPermissao)
  .get("/permissao/id/:id", permissaoController.pegaPermissaoPorId)
  .delete("/permissao/id/:id", permissaoController.apagaPermissao)
  .put("/permissao/id/:id", permissaoController.atualizaPermissao);

module.exports = router;
