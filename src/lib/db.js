import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'citas_gob',
  timezone: '+00:00',
  dateStrings: true
};

let connection;

export async function getConnection() {
  if (!connection || connection.connection._fatalError) {
    try {
      connection = await mysql.createConnection(dbConfig);
      console.log('✅ Conexión a MySQL establecida correctamente');
    } catch (error) {
      console.error('❌ Error conectando a MySQL:', error);
      throw error;
    }
  }
  return connection;
}

export async function query(sql, params = []) {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('❌ Error ejecutando query:', error);
    throw error;
  }
}

export async function transaction(queries) {
  const connection = await getConnection();
  try {
    await connection.beginTransaction();
    
    const results = [];
    for (const { sql, params } of queries) {
      const [result] = await connection.execute(sql, params);
      results.push(result);
    }
    
    await connection.commit();
    return results;
  } catch (error) {
    await connection.rollback();
    console.error('❌ Error en transacción:', error);
    throw error;
  }
}

export default { getConnection, query, transaction };
