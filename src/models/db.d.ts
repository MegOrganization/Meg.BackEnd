// db.d.ts

import { IDatabase } from 'pg-promise';

declare const db: IDatabase<{}>;

export default db;