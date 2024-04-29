const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e_commerce_db', 'example_user', 'StrongerPassword123!', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, testConnection }



