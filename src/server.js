const express = require("express");

const criarConexaoComBanco = require("./database");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const conexao = await criarConexaoComBanco();
    const [results, fields] = await conexao.query(
      "SELECT * FROM funcionario"
    );
    await conexao.end();

    return res.status(200).json(results);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const { nome_funcionario, cpf, telefone } =
      req.body;

    const conexao = await criarConexaoComBanco();
    const [results, fields] =
      await conexao.execute(
        "INSERT INTO funcionario(nome_funcionario, cpf, telefone) VALUES (?,?,?)",
        [nome_funcionario, cpf, telefone]
      );
      const [resultado,resultadoFields] = await conexao.execute("SELECT * FROM funcionario WHERE id_funcionario=?",[results.insertId])
    await conexao.end();

    return res.status(201).json(resultado[0]);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ err });
  }
});

app.listen(8080, () => {
  console.log("rodando na porta 8080");
});
