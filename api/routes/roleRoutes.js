const { Router } = require("express");
const RoleController = require("../controllers/roleController");

const router = Router();

router
  .post("/roles", RoleController.criaRole)
  .get("/role", RoleController.pegaTodasRoles)
  .get("/role/:id", RoleController.pegaRolePorId)
  .delete("/role/:id", RoleController.apagaRole)
  .put("/role/:id", RoleController.atualizaRole);

module.exports = router;
