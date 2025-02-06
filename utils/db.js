import Database from "better-sqlite3";

const db = new Database('databases/campusSafety.db', {fileMustExist: true});
export default db;

//random comment 