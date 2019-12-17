var sql = require("mysql");
var pool = sql.createPool({
    host:"121.36.9.253",
    port:"3306",
    user:"root",
    password:"Liu@903265",
    database: "haidilao",
    connectionLimit: 15
});
module.exports = pool;