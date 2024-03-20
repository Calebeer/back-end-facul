const mysql = require("mysql2/promise");

module.exports = async function criarConexaoComBanco() {
  const conexao = await mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "mysql_facul",
  });

  //Teste de conexão

  await conexao.connect();

  return conexao;
};
