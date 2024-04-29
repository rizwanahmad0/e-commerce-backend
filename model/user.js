const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db-config/db-connection')
class User extends Model { }

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'Users' // We need to choose the table name
});

module.exports = User