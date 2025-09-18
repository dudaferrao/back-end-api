import express from "express";      // Requisição do pacote do express
import pkg from "pg";
import dotenv from "dotev";

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta
dotenv.config();
const {Pool} = pkg;

app.get("/", async (req, res) => {        // Cria endpoint na rota da raiz do projeto
  console.log("Rota GET / solicitada");
  const db = new Pool({  
    connectionString: process.env.URL_BD,
});

let dbStatus = "ok";

try {
  await db.query("SELECT 1");
} catch (e) {
  dbStatus = e.message;
}

  res.json({
		message: "API para auxiliar a escrita do código de Js",      // Substitua pelo conteúdo da sua API
    author: "Maria Eduarda da Silva",    // Substitua pelo seu nome
    statusBD: dbStatus
    
  });
  
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço rodando na porta:  ${port}`);
});