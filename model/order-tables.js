const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db-config/db-connection')
class orderTables extends Model { }

orderTables.init({
    order_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    table_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'orderTables',
    tableName: 'Order_Tables'
});

module.exports = orderTables