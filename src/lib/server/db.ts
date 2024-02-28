import migrationV0 from './migrations/v0.sql?raw'
import Database, { SqliteError, type Statement } from 'better-sqlite3'
import { dataDir } from './config'

export const db = new Database(`${dataDir}/teitha.db`)
db.pragma('journal_mode = WAL')

export function migrate() {
    migrateV0()
}

function migrateV0() {

    console.info('checking migration: v0')
    if (!migrationsTableExists() || !migrationApplied('v0')) {
        console.info('applying migration: v0')
        const migrateV0 = db.transaction(() => {
            db.exec(migrationV0)
        })
        migrateV0()
    }
}

function migrationsTableExists(): boolean {
    const stmt = db.prepare("SELECT COUNT(*) as count FROM sqlite_master WHERE type = 'table' AND name = 'migrations'")
    const res = stmt.get() as any;
    return res.count > 0
}

function migrationApplied(migration: string): boolean {
    const stmt = db.prepare("SELECT COUNT(*) as count FROM migrations WHERE migration = ?")
    const res = stmt.get(migration) as any;
    return res.count > 0
}

export function retryUniqueConstraint<T>(stmt: Statement, data: T, column: string, transform: (data: T) => any) {
    var count = 0;
    while (true) {
        try {
            count++;
            stmt.run(data);
            return;
        }
        catch (err: unknown) {
            console.log(err);
            if (err instanceof SqliteError && err.code === 'SQLITE_CONSTRAINT_UNIQUE' && err.message.endsWith(column)) {
                if (count > 10) { throw err }

                data = transform(data);
            } else {
                throw err;
            }
        }
    }
}