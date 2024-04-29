const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db-config/db-connection')
class orderTop extends Model { }

orderTop.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'orderTop',
    tableName: 'Order_Tops'
});

module.exports = orderTop