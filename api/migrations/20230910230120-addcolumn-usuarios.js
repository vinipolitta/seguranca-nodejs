"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("usuarios", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn("usuarios", "deletedAt");
  },
};
