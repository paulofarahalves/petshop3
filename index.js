const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http
    .createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query; // parametros
    let rota = urlCompleta.pathname; // ex: pets/add

    // console.log(queryString);

    switch(rota){
        case "/pets":
         let conteudo = petshop.listarPets();
         if(conteudo.length>0){
             res.write(conteudo);
         } else {res.write("Nenhum pet cadastrado :(")}
          break;
        case "/pets/add":
         let novoPet = queryString;
         petshop.adicionarPet(novoPet);
         res.write(`${novoPet.nome} foi adicionado a nossa lista!`);
          break;
        case "/pets/buscar":
        let nomePet = queryString.nome;
        let petsEncontrados = petshop.buscarPet(nomePet);
        if(petsEncontrados.length > 0){
          res.write(
              `Encontramos ${petsEncontrados.length} pets com o nome ${nomePet}`
            );
        }

         break;
        default:
         res.write("tô perdido");
    }

    res.end();

})

    .listen(3000, "localhost", () =>{
    console.log("Servidor rodando :)");
});