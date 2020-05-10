# Rotas para post:

As rotas estão utilizando o app do heroku no endereço: 
https://scorebank.herokuapp.com

## incluir: usada para para adicionar um score para um novo id <p>
https://scorebank.herokuapp.com/incluirScore <p>
**parâmetros:**<p>
id: string <p>
score: int

## alterar: usada para ajustar o score de um id já existente <p>
https://scorebank.herokuapp.com/alterarScore <p>
**parâmetros:**<p>
id: string <p>
score: int

## recuperar: apenas retorna o score de um id cadastrado <p>
https://scorebank.herokuapp.com/recuperarScore <p>
**parâmetros:**<p>
id: string

### OBS: <p>
No post deve ser utilizado x-www.form-urlencoded para que a consulta seja nome/valor 
separados pelo comercial(&), e os nomes separados dos valores usando o igual (=). 
Um exemplo disto seria:<p>
id=1&score=10




