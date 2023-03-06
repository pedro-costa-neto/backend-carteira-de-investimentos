require('dotenv').config();

module.exports = {
    development: {
        dialect: "sqlite",
        storage: "./development.sqlite3",
        logging: true
    },
    test: {
        dialect: "sqlite",
        storage: "./development.sqlite3",
        logging: true
    },
    production: {
        dialect: "sqlite",
        storage: "./development.sqlite3"
    }
}
