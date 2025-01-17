import Database from "better-sqlite3";

const db = new Database('campusSafety.db', {fileMustExist: true});
export default db;