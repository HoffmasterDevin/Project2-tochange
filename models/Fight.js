const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fight extends Model {}

Fight.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
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
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
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