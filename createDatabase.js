const mysql = require('mysql2/promise');

const createDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Gise@cris'  
        });

        await connection.query('CREATE DATABASE IF NOT EXISTS crud_bd_2');
        console.log("La DB se creó o ya existía");

        await connection.end();
    } catch (error) {
        console.error("Error al crear la base de datos:", error.message);
    }
}

createDatabase();
