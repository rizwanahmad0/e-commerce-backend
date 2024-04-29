const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db-config/db-connection')
class Order extends Model { }

Order.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders'
});

module.exports = Order