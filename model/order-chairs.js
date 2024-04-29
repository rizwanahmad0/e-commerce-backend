const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db-config/db-connection')
class orderChairs extends Model { }

orderChairs.init({
    order_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chair_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'orderChairs',
    tableName: 'Order_Chairs'
});

module.exports = orderChairs