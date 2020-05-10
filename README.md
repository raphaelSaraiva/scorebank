#Rotas para post:

As rotas estão utilizando o app do heroku no endereço: 
https://scorebank.herokuapp.com

incluir: usada para para adicionar um score para um novo id
https://scorebank.herokuapp.com/incluirScore
parâmetros:
id: string
score: int

alterar: usada para ajustar o score de um id já existente
https://scorebank.herokuapp.com/alterarScore
parâmetros:
id: string
score: int

recuperar: apenas retorna o score de um id cadastrado
https://scorebank.herokuapp.com/recuperarScore
parâmetro:
id: string

OBS: no post deve ser utilizado x-www.form-urlencoded para que a consulta seja nome/valor 
separados pelo comercial(&), e os nomes separados dos valores usando o igual (=). 
Um exemplo disto seria:

id=1&score=10




