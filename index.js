// CRUD --> CREATE, READ, UPDATE, and DELETE;

const express = require("express");

const server = express();

server.use(express.json());

const movies = ["2001", "Hereditário", "Midsommar","X", "Pearl"];

// Retorna um filme

server.get("/movies/:index", (req, res) => {
  const { index } = req.params;

  return res.json(movies[index]);
});

// Retorna todos os filmes
server.get("/movies", (req, res) => {
  return res.json(movies);
});

// Adicionar um novo filme
server.post("/movies", (req, res) => {
  const name = req.body;
  movies.push(name);

  return res.json(movies);
});

// Atualizar um filme
server.put("/movies/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  movies[index] = name;

  return res.json(movies);
});

// Deletar um filme
server.delete("/movies/:index", (req, res) => {
    const { index } = req.params;

    movies.splice(index, 1);
    return res.json({message: "O filme foi deletado"});
});

server.listen(3000);