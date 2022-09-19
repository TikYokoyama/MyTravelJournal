const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require('./database');
const porta = 5500;

const app = express();

//checagem se db esta conectado
db.hasConnection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));