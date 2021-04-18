const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    /**
     * Encontrar todos os usuários que tem email que termina com @gmail.com
     * Desses usuários, encontrar todos que moram na Rua Zona
     * Desses usuários, encontrar as tecnologias que começam com React
     */

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com",
        },
      },
      include: [
        {
          association: "addresses",
          where: { street: "Rua Zona" },
          attributes: ["street", "number"],
        },
        {
          association: "techs",
          // mesmo se não tiver tecnologia ele vai aparecer
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
          attributes: ["name"],
          // não mostra a tabela auxiliar
          through: { attributes: [] },
        },
      ],
    });

    return res.json(users);
  },
};
