module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        return queryInterface.changeColumn(
            'posts',
            'content',
            {
                type: Sequelize.STRING(4000),
            }
        );

    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.changeColumn(
            'posts',
            'content',
            {
                type: Sequelize.STRING,
            }
        );
    }
}
