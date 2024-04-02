/*  Passo a passo pra usar o express:
1 --> importação do express
2 --> inicialização do express
3 --> inicialização do servidor  */ 

//rota: são caminhos diferentes pra várias partes da minha aplicação (caminhos que o usuário pode acessar)

const express = require("express"); //importação do express.js 
const app = express();  //iniciando o express

//rotas
//quando criamos uma rota precisamos dizer pra onde essa rota aponta e o que ela faz
//toda rota criada precisa retornar uma resposta

//primeiro é necessário definir o endereço da rota --> "\" e depois o que ela faz --> "function()"
app.get("/", function(req, res){   //rota criada (toda rota criada precisa ter uma resposta)
    res.send("<h1>O teste da rota funcionou!</h1>");   //a function diz o que a rota faz 
    // send envia a resposta de volta ao usuário
    /* nesse caso, a resposta foi um texto, mas a resposta pode ser uma page html, um arquivo, um download
    uma página web, um json, um xml, etc.   */ 
});  // a rota só pode enviar um send, uma única resposta uma única vez, senão da erro 
//ou seja, uma rota não pode ter múltiplas respostas

//rota 2
app.get("/blog", function(req, res){
    res.send("<h1>Gossip Girl</h1>");  //teste com tag HTML
});

//rota 3
app.get("/canal/youtube", function(req, res){
    res.send("<h3>  Mensagem teste do canal do youtube </h3>");
});

//req = requisicao
//res = resposta 
//padrão usado no express.js pra criação de rotas 

/* sempre que uma alteração no programa é efeita, o servidor precisa ser reiniciado..
pra não precisar fazer isso manual a cada alteração que fizermos, instalamos um módulo do node chamado 'nodemon'  
pra instalar o comando é: npm install nodemon -g  (o -g significa que a instalação é global no computador)*/
//o nodemon faz com que o servidor sempre seja reiniciado quando fazemos qualquer alteração no programa
//pra iniciar o programa com o nodemon colocamos: nodemon + o nome do programa, nesse caso: nodemon index.js






//a porta do servidor é a última coisa a ser criada, antes criamos as rotas de acessos
app.listen(2525, function(erro){  //listen é a porta onde o servidor vai rodar
    if(erro){
        console.log("Ocorreu um erro.");
    } else {
        console.log("Servidor funcionando.");
    }
});
