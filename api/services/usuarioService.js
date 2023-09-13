const database = require("../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");
const Services = require("./Services");

class UsuarioService extends Services {
  constructor() {
    super("usuarios");
    this.usuarios = new Services("usuarios");
  }

  async cadastrar(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: dto.email,
      },
    });
    if (usuario) {
      throw new Error("Usuario ja cadastrado");
    }

    try {
      const senhaHash = await hash(dto.senha, 8);
      const novoUsuario = await database.usuarios.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash,
      });

      return novoUsuario;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuario");
    }
  }
}
module.exports = UsuarioService;
