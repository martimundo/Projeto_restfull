# Projeto_restfull

Aqwui descrevo anotações que foram realizadas durante o processo de criação desse pequeno projeto criado através do curso de JavaScript com 
a equipe HCode Treinamentos.
São anotações e orientações para futuros testes e treinamento de conhecimentos.


Para criar um arquivo em json para instalação das dependências utilizamos os seguintes passos:

1º - Na linha de comando dentro da pasta do projeto, digitamos o código: npm init
    Após digitar o npm init, seguimos os passos para criar o arquivo package.json...
2º - Com esses comandos as dependências estarão dentro do package.json..
3º - Instalando o express.
    3.1 - dentro da pasta principal do projeto, digite o comando: npm install express --save. O save, tem a
    função de salvar essa dependência dentro do arquivo json.
4º - Instalando o nodemon...O nodemon é um serviço de monitoramento que vai monitorar qualquer alteração dentro
    do projeto e reiniciará automaticamente seu servidor. Esse pacote só dever ser ativado em ambiente de desenvolvimento

    4.1 - Para instalar o nodemon de forma global usamos o comando: npm install -g nodemon
        4.1.1 - Para dar o start usamos o comando nodemon index
5º - Para carregar automaticamente os nossos scripts vamos utilizar o consgin que um sucessor do express-load. Ele vai facilitar
o desenvolvimento de aplicativos com separação de lógica de arquivos e carregamento automático dos scripts.
    Para instalar esse pacote, usaremos o comando "nnpm i consign --save" para deixar ele configurado em nosso packjson...

6º - Quando usamos o Postman para fazermos testes e enviar os dados por esse app vamos precisar de uma lib complementar do 
express.
    para instalar esse pacote adicional utilizamos o "npm install body.parse --save";

7º - Para armazenar os dados referente a aplicação futura, vamos utillizar o NeBD. NeDB é um banco dados construido
em JS.
    Para instalar o NeDB vamos usar o seguinte comando: npm install nedb --save.
8º - Sempre que formar trabalhar com rest ou restfull API precisamos programas as rotas e metodos dependendo da ação.
