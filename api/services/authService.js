const database = require("../models");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const jsonSecret = require("../config/jsonSecret");

class AuthService {
  async login(dto) {
    const usuario = await database.usuarios.findOne({
      attributes: ["id", "email", "senha"],
      where: {
        email: dto.email,
      },
    });

    if (!usuario) {
      throw new Error("Usuario nao cadastrado");
    }

    const senhasIguais = await compare(dto.senha, usuario.senha);

    if (!senhasIguais) {
      throw new Error("Usuario ou senha incorreta");
    }

    const accessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      jsonSecret.secret,
      {
        expiresIn: 86400, //1 dia para expirar
      }
    );

    return { accessToken };
  }
}

module.exports = AuthService;
