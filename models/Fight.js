const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fight extends Model {}

Fight.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        date: {
            type: DataTypes.STRING,
            valitdate: {
                isDate: true,
            },
        },
        enemy_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        defeated: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        },
        ongoing: {
            type: Datatypes.BOOLEAN,
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