const UsuarioService = require("../services/usuarioService");

const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha });

      res.status(201).send(usuario);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodosUsuarios(req, res) {
    const usuarios = await usuarioService.buscarTodosUsuarios();

    res.status(200).json(usuarios);
  }

  static async buscarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.buscarUsuarioPorId(id);

      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async editarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
      const usuario = await usuarioService.editarUsuario({ id, nome, email });

      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deletarUsuario(req, res) {
    const { id } = req.params;

    try {
      await usuarioService.deletarUsuario(id);

      res.status(200).send({ message: "Usuario deletado com sucesso!" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await usuarioService.apagaRegistro(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      const registroRestaurado = await usuarioService.restauraRegistro(id);
      return res.status(200).json(registroRestaurado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UsuarioController;
