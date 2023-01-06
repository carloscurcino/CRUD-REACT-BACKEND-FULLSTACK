import mysql from "mysql"

export const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "baf3d64cf0062a",
    password: "830f7b0d",
    database: "heroku_3448442858d4e5b"
});

