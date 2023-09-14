const { Router } = require("express");

const segurancaController = require("../controllers/segurancaController");

const router = Router();

router.post("/seguranca/acl", segurancaController.cadastrarAcl);

module.exports = router;
