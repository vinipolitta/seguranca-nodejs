const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController");

const router = Router();

router
  .get("/seguranca", SegurancaController.pegaTodasUsuarios)
  .post("/seguranca/acl", SegurancaController.cadastrarAcl)
  .post(
    "/seguranca/permissoes-roles",
    SegurancaController.cadastrarPermissoesRoles
  );

module.exports = router;
