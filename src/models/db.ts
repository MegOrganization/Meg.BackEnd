// db.js

import { IDatabase, IMain } from 'pg-promise';
const dbConfig = {
    host: '127.0.0.1',
    port: 5432,  // Default PostgreSQL port
    database: 'postgres',
    user: 'postgres',
    password: 'changeme',
};

const pgp: IMain = require('pg-promise')();
const db: IDatabase<{}> = pgp(dbConfig);

export default db;
// module.exports = db;