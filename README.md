# 	:woman_technologist: Project Trybe Warts

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo do curso de desenvolvimento web da Trybe. <br>Nele pude desenvolver habilidades em CSS e Javascript, principalmente na parte de eventos em JS.

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Essa página foi feita usando HTML, CSS. Pude desenvolver tais habilidades:
* Criar formulários em HTML;
* Utilizar CSS Flexbox para criar layouts flexíveis;
* Criar regras CSS específicas para serem aplicadas a dispositivos móveis;
* Construir páginas que alteram o seu layout de acordo com a orientação da tela;
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana2-oliveira-trybewarts', isso por conta da exigência do curso.
### Instalação
Antes de realizar o projeto, precisei instalar as dependências usando npm install.
### Visualização do projeto
O projeto poderá ser visualizado através da extensão do Visual Studio Code que permite criar um servidor HTTP para servir páginas HTML, chamada Live Server.
### Testes
Os testes usando foram ESLint e Cypress, através dos **comandos**: <br>
* npm run cypress:open <br>
* npm run lint:styles
### Autores
Esse foi um projeto em dupla,que desenvolvido por Juliana Oliveira e Victor Tavares.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Bootstrap.

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1
Crie uma barra verde na parte superior da página.
* Esta barra deve possuir a classe header
* A classe header deve determinar que o elemento é um flex container
* A classe header deve possuir a propriedade background-color: rgb(50, 167, 145)
#### :footprints:Requisito 2
Adicione o logotipo da Trybewarts com a classe trybewarts-header-logo na barra superior.
* Deve existir um elemento img com a classe trybewarts-header-logo
* O atributo src do logotipo deve apontar para images/trybewarts-header-logo.svg
#### :footprints:Requisito 3
Acrescente um formulário de login no canto direito da barra superior contendo os inputs de email, senha e um botão de login.
* O formulário deve ter a classe trybewarts-login
* O input de email deverá ter o atributo name igual a email e o placeholder igual a Email
* O input de senha deverá ter o atributo name igual a password e o placeholder igual a Senha
* O botão deverá ter o texto "Entrar"
* O formulário deve ser um flex container
* O formulário deve estar a direita da logo
* Dica: adicione a propriedade flex que faz os elementos terem o espaçamento máximo entre eles no header
* Ao preencher o formulário e clicar no botão, será validado que:
* Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!"
* Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos."
#### :footprints:Requisito 4
Crie um título com o texto Trybewarts centralizado dentro do Header.
* Deve existir um elemento <h1> com o id trybewarts-header-title e com o texto "Trybewarts"
* O título deverá estar centralizado na barra verde
* O header deve ter exatamente três elementos filhos
* O filho do meio deve ser o título
#### :footprints:Requisito 5
* Adicione um formulário no corpo da página.
* Deve existir um formulário com o id evaluation-form
* O formulário deve estar inserido dentro de uma tag main
* Tanto o formulário quanto o main devem ser flex containers
* O formulário deve ter uma largura de 675px
#### :footprints:Requisito 6
Faça com que o eixo principal do formulário seja vertical.
* Mude o eixo principal do formulário com id evaluation-form para vertical
#### :footprints:Requisito 7
Adicione a logo da Trybewarts no lado direito da página.
* Crie um elemento img com o id trybewarts-forms-logo
* O atributo src deve apontar para images/trybewarts-colored.svg
* A imagem deve possuir o estilo css height de 500px
#### :footprints:Requisito 8
Acrescente ao formulário com id evaluation-form os inputs de nome, sobrenome e email.
* Deverá haver um input com o id input-name e placeholder Nome
* Deverá haver um input com o id input-lastname e placeholder Sobrenome
* Deverá haver um input com o id input-email e placeholder Email
#### :footprints:Requisito 9
Acrescente ao formulário um select com o id house contendo as opções Gitnória, Reactpuff, Corvinode e Pytherina.
* Deverá conter a opção com text e value igual a Gitnória e com o id igual a gitnoria-house
* Deverá conter a opção com text e value igual a Reactpuff e com o id igual a reactpuff-house
* Deverá conter a opção com text e value igual a Corvinode e com o id igual a corvinode-house
* Deverá conter a opção com text e value igual a Pytherina e com o id igual a pytherina-house
#### :footprints:Requisito 10
Posicione os campos de Nome e Sobrenome para que fiquem em linha.
* Os campos de Nome e Sobrenome devem estar lado a lado.
#### :footprints:Requisito 11
Posicione os campos de Email e Casa para que fiquem em linha.
* Os campos de Email e Casa devem estar lado a lado.
#### :footprints:Requisito 12
Acrescente ao formulário um campo de entrada para qual família a pessoa estudante se identifica
* Crie um elemento com o id label-family e o texto "Qual sua família?" deverá ser criado
* Crie um input do tipo radio com o atributo name igual a family e value igual a Frontend
* Crie um input do tipo radio com o atributo name igual a family e value igual a Backend
* Crie um input do tipo radio com o atributo name igual a family e value igual a FullStack
* Posicione os radio buttons para ficar abaixo um do outro, na sequência Frontend, Backend e Fullstack
* Posicione os radio buttons abaixo do label
#### :footprints:Requisito 13
Crie campos de entrada do tipo checkbox contendo seis opções.
* Crie um elemento com o id label-content e o texto "Qual conteúdo você está com mais vontade de aprender?"
* Crie um input do tipo checkbox com o value igual a HoFs
* Crie um input do tipo checkbox com o value igual a Jest
* Crie um input do tipo checkbox com o value igual a Promises
* Crie um input do tipo checkbox com o value igual a React
* Crie um input do tipo checkbox com o value igual a SQL
* Crie um input do tipo checkbox com o value igual a Python
* Posicione as checkboxes abaixo do label
#### :footprints:Requisito 14
Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts.
* Um elemento com o id label-rate e o texto "Como você avalia a Trybewarts?" deverá ser criado
* O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10
* Os radio buttons devem ter o atributo value com o valor de suas opções de 1 a 10.
* Os radio buttons devem ter o atributo name com o valor "rate"
* Posicione os radio buttons para ficar lado a lado
* Posicione os radio buttons à direita da label
#### :footprints:Requisito 15
Crie uma textarea com o id textarea e uma label com a classe textarea contendo o número máximo de caracteres igual à 500.
* Uma label com a classe textarea e o texto "Deixe seu comentário:" deverá ser criado
* O campo textarea deverá ter o máximo de 500 caracteres
#### :footprints:Requisito 16
Crie um campo de entrada do tipo checkbox com o id agreement para validar as informações.
* Um rótulo (label) com o id label-infos e o texto "Você concorda com o uso das informações acima?" deverá ser criado
* O campo deve ser formado por um checkbox
* O campo de 'checkbox' deve possuir o ID agreement
* Posicione a checkbox ao lado da label
#### :footprints:Requisito 17
Crie um botão de Enviar para submeter o formulário.
* Um botão do tipo submit deverá ser criado
* O botão deve possuir o ID submit-btn
* Deverá conter o texto "Enviar"
#### :footprints:Requisito 18
Faça com que o botão Enviar seja habilitado somente após a checkbox do requisito 16 ser selecionada.
* O botão deverá estar desabilitado caso a checkbox não esteja selecionada
* O botão deverá ser habilitado caso a checkbox seja selecionada
#### :footprints:Requisito 19
Crie um rodapé no final da página.
* O rodapé deverá conter o texto "Direitos reservados à Trybewarts©".

