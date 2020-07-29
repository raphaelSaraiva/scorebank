# Rotas para post:

As rotas estão utilizando o app do heroku no endereço: 
https://scorebank.herokuapp.com

## Incluir: usada para adicionar um score para um novo id <p>
https://scorebank.herokuapp.com/incluirScore <p>
**parâmetros:**<p>
id: string <p>
score: int

## Alterar: usada para ajustar o score de um id já existente <p>
https://scorebank.herokuapp.com/alterarScore <p>
**parâmetros:**<p>
id: string <p>
score: int

## Recuperar: apenas retorna o score de um id cadastrado <p>
https://scorebank.herokuapp.com/recuperarScore <p>
**parâmetros:**<p>
id: string

### OBS: <p>
No post deve ser utilizado x-www.form-urlencoded para que a consulta tenha os parâmetros 
separados pelo comercial(&), e os parâmetros separados de seus valores usando o igual (=). 
Um exemplo disto seria:<p>
**id=1&score=10**




