import mysql from "mysql"

export const db = mysql.createConnection({
    host: "containers-us-west-166.railway.app",
    user: "root",
    password: "7ryL8DSHWfwwSWedyIWc",
    database: "railway",
    port: 7793
});

