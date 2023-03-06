import Sequelize from 'sequelize'

class Database {
    public connection!: Sequelize.Sequelize;

    constructor() {
        this.init();
    }

    init(): void {
        this.connection = new Sequelize.Sequelize({
            dialect: "sqlite",
            storage: "./development.sqlite3",
            logging: true
        });
    }
}

const database: Database = new Database();

export default database;
