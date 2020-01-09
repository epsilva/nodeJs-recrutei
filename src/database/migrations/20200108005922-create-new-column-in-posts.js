module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        return queryInterface.addColumn(
            'posts',
            'content',
            {
                type: Sequelize.STRING,
            }
        );

    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.removeColumn(
            'posts',
            'content',
            {
                type: Sequelize.STRING,
            }
        );
    }
}
