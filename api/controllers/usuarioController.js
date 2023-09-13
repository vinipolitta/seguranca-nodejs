const UsuarioService = require("../services/usuarioService");

const usuarioService = new UsuarioService();

class UruarioController {
  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha });

      res.status(201).send(usuario);
    } catch (error) {
      res.status(400).send({
        message: error.message || "Erro inesperado ao tentar criar usuário.",
      });
    }
  }

  static async pegaUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await usuarioService.pegaUmRegistro({ id });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTodasUsuarios(req, res) {
    try {
      const todasAsPessoas = await usuarioService.pegaTodosOsRegistros();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await usuarioService.atualizaRegistro(novasInfos, id);
      return res.status(200).json({ mensagem: `id ${id} atualizado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaUsuario(req, res) {
    const { id } = req.params;
    try {
      await usuarioService.apagaRegistro(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = UruarioController;
