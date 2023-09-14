"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("produtos", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn("produtos", "deletedAt");
  },
};
