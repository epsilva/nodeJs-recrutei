import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Post extends Model {
    static init(sequelize) {
        super.init({
            tipo: Sequelize.STRING,
            title: Sequelize.STRING,
            content: Sequelize.STRING,
        },
            {
                sequelize
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' });
    }
}

export default Post;
