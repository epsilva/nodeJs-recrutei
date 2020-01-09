'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('posts', 'type', 'tipo');
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('posts', 'tipo', 'type');
    }
};
