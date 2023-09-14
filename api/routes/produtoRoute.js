const { Router } = require("express");
const ProdutoController = require("../controllers/produtoController");
const roles = require("../middleware/roles");
const permissoes = require("../middleware/permissoes");
const permissoesRoles = require("../middleware/permissoesRoles");

const router = Router();

router
  .post("/produto", ProdutoController.cadastrarProduto)
  .get(
    "/produto",
    permissoes(["Visualizar"]),
    ProdutoController.buscarTodosProdutos
  )
  .get(
    "/produto/id/:id",
    permissoesRoles(["listar"]),
    ProdutoController.buscarProdutoPorId
  )
  .delete(
    "/produto/id/:id",
    roles(["Gerente"]),
    permissoes(["excluir"]),
    ProdutoController.deletarProdutoPorId
  )
  .put(
    "/produto/id/:id",
    permissoesRoles(["editar"]),
    ProdutoController.editarProduto
  );

module.exports = router;
