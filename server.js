import express from 'express';
const app = express(); 

app.get("/", (req, res) => {
  res.send("boas-vindas à Central de Informações da Escola");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});

app.get("/status", (req, res) => {
    res.json( {status: "Online"} );
});

app.get("/sobre", (req, res) => {
    res.json( `Cidade: Valinhos
               Nome da escola: Jão de Noronha
               Escola tecnica` );
});     
app.get("/cursos", (req, res) => {
    res.json([
      { id: 1, curso: "Desenvolvimento de sistema" },
      { id: 2, curso: "Mecanica" },
      { id: 3, curso: "Eletrica" }
    ]);
});     

    app.get("/professor", (_req, res) => {
    res.json(` Nome do professor de Desenvolvimento de sistema: Jeferson
               Nome do professor de Mecanica: Fabricio
               Nome do professor de Eletrica: Gabriel` );
});  

app.get("/ajuda", (_req, res) => {
  res.json([
    { "pagina principal": "/" },
    { "pagina de status": "/status" },
    { "pagina de informações": "/sobre" },
    { "pagina de cursos": "/cursos" },
    { "pagina de responsaveis": "/professor" }
  ]);
});
 