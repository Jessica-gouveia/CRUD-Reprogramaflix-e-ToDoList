## CRUD - {reprograma}flix e Lista de tarefas:rocket::popcorn:



###                                          Luz, câmera , ação!!

![joey](http://f2.thejournal.ie/media/2014/04/263.gif)

Com essa API Restfull de filmes e séries , você poderá acessar, criar, deletar e alterar informações específicas dos filmes ou séries!

Para isso , foi realizado um CRUD completo. O significado de CRUD é:

C - Create (criar um novo registro);

R - Read   (ler/exibir informações);

U - Update (atualizar os dados );

D - Delete (apagar um registro).

Mas antes de assistir um filme ou série, que tal organizar as tarefas que você tem ? 

Aqui também tem uma API de tarefas, onde você vai poder visualizar todas as tarefas, alterar uma tarefa inteira ou só uma parte, criar uma nova ou deletar uma já realizada. :wink:

![ross](https://c.tenor.com/GUtljcCF1fcAAAAC/ross-friends.gif)

Todas as rotas , lógicas e database estão separadas de acordo com a arquitetura MVC. As rotas e lógicas foram feitas de acordo com a nossa demanda de negócio.

### Demandas de negócio - {reprograma}flix

| Rota         | Resultado                                    | Requisição |
| ------------ | -------------------------------------------- | ---------- |
| "/"          | Mensagem de boas vindas                      | {GET}      |
| "/todos"     | Retorna todos os filmes                      | {GET}      |
| "/titulo"    | Retorna os filmes por título                 | {GET}      |
| "/genero"    | Retorna os filmes por gênero (escolhido)     | {GET}      |
| "/:id"       | Retorna o filme pelo ID escolhido            | {GET}      |
| "/cadastrar" | Cria um novo fime                            | {POST}     |
| "/:id"       | Exclui um filme pelo ID                      | {DELETE}   |
| "/:id"       | Altera um filme de acordo com o ID escolhido | {PUT}      |
| "/:id"       | Altera o título do filme de acordo com o ID  | {PATCH}    |

| Rota             | Resultado                             | Requisição |
| ---------------- | ------------------------------------- | ---------- |
| "/atualizar/:id" | Atualiza qualquer dado do meu filme   | {PATCH}    |
| "/series"        | Retorna todas as séries               | {GET}      |
| "/titulo"        | Retorna todos os títulos              | {GET}      |
| "/genero"        | Retorna o gênero escolhido da série   | {GET}      |
| "/:id"           | Retorna por id a série escolhida      | {GET}      |
| "/cadastrar"     | Cadastra uma nova série               | {POST}     |
| "/:id"           | Apaga uma série pelo ID escolhido     | {DELETE}   |
| "/alterar/:id"   | Atualiza qualquer informação da série | {PATCH}    |
| "/:id"           | Altera uma série                      | {PUT}      |

### Demandas de negócio TO -DO List

| Rotas            | Resultado                             | Requisição |
| ---------------- | ------------------------------------- | ---------- |
| "/tarefa"        | Mensagem de boas vindas               | {GET}      |
| "/todos"         | Retorna todas as tarefas cadasttradas | {GET}      |
| "/:id"           | Retorna a tarefa escolhida por ID     | {GET}      |
| "/cadastrar"     | Cadastra uma nova tarefa              | {POST}     |
| "/:id"           | Deleta uma tarefa pelo ID escolhido   | {DELETE}   |
| "/:id"           | Substitui a tarefa                    | {PUT}      |
| "/atualizar/:id" | Atualiza qualquer dado da tarefa      | {PATCH}    |

Agora com todas as tarefas organizadas, hora de deixar as séries em dia também! 

![joey-and-chandler](https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/friends.gif)

