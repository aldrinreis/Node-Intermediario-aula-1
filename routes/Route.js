var express = require("express");
var router = express.Router();

// LISTA  DE CIDADES

var cidades = [
  "Mimoso",
  "Timon",
  "Caxias",
  "Balneario Camboriu",
  "Rio de Janeiro",
];

router.get("/clientes", (req, res) => res.send("Lista de Todos os Clientes"));

router.get("/", (req, res) => res.send("Seja bem vindo ao nosso sistema"));

router.get("/clientes/:nome/:sobrenome?", (req, res) => {
  res.send(
    "Seja bem Vindo <h1>" +
      req.params.nome +
      " " +
      req.params.sobrenome +
      "</h1>",
  );
});

// AULA 3

router.get("/cidades/:id", (req, res) => {
  let id = req.params.id;
  return res.json([cidades[id]]);
});

router.post("/cidades", (req, res) => {
  let nome = req.body.nome;
  cidades[cidades.length] = nome;
  //return res.json([cidades[cidades.length - 1]]);

  return res.json({
    todasCidades: cidades,
    novaCidade: cidades[cidades.length - 1],
  });
});

router.get("/cidades", (req, res) => {
  res.render("form");
});

// AULA 4

router.get("/par", (req, res) => {
  let nome = req.query["nome"];
  if (nome) {
    res.send("<h1> " + nome + " </h1>");
  } else {
    res.send("Não foi localizado nenhum valor no navegador");
  }


});


//https://25d43e8d-74bc-4840-b53a-d5269a5179f6-00-37glty0n9hpbt.picard.replit.dev/par/?nome=Teste


// AULA 5 API REST






module.exports = router;
