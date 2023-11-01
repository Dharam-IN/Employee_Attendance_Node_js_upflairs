const {Client} = require("pg")

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "employees_db",
    password: "postgresql",
    port: 5432,
})

client.connect();
module.exports = client;

// client.query("SELECT * FROM employees", (error, results)=>{
//     if(error){
//         console.log("Error executing query: ", error);
//     }else{
//         console.log("Query results: ", results.rows);  
//     }

// })
// client.end();
