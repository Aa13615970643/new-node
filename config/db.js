const Sequelize = require('sequelize');

/**
 *
 * 配置数据库
 *
 * 第一个参数 boblog    数据库名字
 * 第二个参数 root      数据库名字
 * 第三个参数 password  数据库密码
 */
const sequelize = new Sequelize('root', 'root', 'a708929573', {
    host: '121.4.52.201',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

module.exports = {
    sequelize
}
