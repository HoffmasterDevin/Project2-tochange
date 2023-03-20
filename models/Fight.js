const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fight extends Model {}

Fight.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
<<<<<<< HEAD
            primarykey: true,
=======
            primaryKey: true,
>>>>>>> 89da98df5090068094f73a7794d8fabbdc1720b3
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'user_id',
            },
        },
        date: {
<<<<<<< HEAD
            type: DataTypes.STRING,
            valitdate: {
                isDate: true,
            },
=======
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
>>>>>>> 89da98df5090068094f73a7794d8fabbdc1720b3
        },
        enemy_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        current_health: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defeated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        ongoing: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'fight'
    }
);

module.exports = Fight;