const blockchain = require("./blockchain");
module.exports = async function(server) {

//rotas do contrato
server.post('/incluirScore', async function (req, res) { 
  accounts = await blockchain.web3Test.eth.getAccounts();
  if(req.body.id != null && req.body.score != null ){
    if(req.body.score > 10 || req.body.score < 1){
      res.send({message: 'O Score deve ser um valor entre 1 e 10'});
    }else{
      const search = await blockchain.instanceScoreBank.methods.recuperarScore(req.body.id).call();
      if(search != 0){
        res.send({message: 'Usuario já cadastrado'});
      }else{
        await blockchain.instanceScoreBank.methods.incluirScore(req.body.id, req.body.score).send({
          from: accounts[0],
          gas: '1000000'
        });
        res.send({message: 'Score adicionado com sucesso'});
      }
    }
  }else {
    res.status(400).send({message: 'Existem campos não preenchidos na requisição'});
  }
});


server.post('/alterarScore', async function (req, res) { 
  accounts = await blockchain.web3Test.eth.getAccounts();
  if(req.body.id != null && req.body.score != null ){
    if(req.body.score > 10 || req.body.score < 1){
      res.send({message: 'O Score deve ser um valor entre 1 e 10'});
    }else{
      const search = await blockchain.instanceScoreBank.methods.recuperarScore(req.body.id).call();
      if(search == 0){
        res.send({message: 'Usuario ainda não cadastrado'});
      }else{
        await blockchain.instanceScoreBank.methods.alterarScore(req.body.id, req.body.score).send({
          from: accounts[0],
          gas: '1000000'
        });
        res.send({message: 'Score ajustado com sucesso'});
      }
    }
  }else {
    res.status(400).send({message: 'Existem campos não preenchidos na requisição'});
  }
});


server.post('/recuperarScore', async function (req, res) {
  if(req.body.id != null){
    const result = await blockchain.instanceScoreBank.methods.recuperarScore(req.body.id).call();
    if(result == 0){
      res.send({message: 'Usuario ainda não cadastrado'});
    }
    res.send({result});
  }else {
    res.status(400).send({message: 'Existem campos não preenchidos na requisição'});
  }
});

server.post('/mudarProprietario', async function (req, res) {  
  if(req.body.address != null){
    var codigo = await blockchain.instanceScoreBank.methods.mudarProprietario(req.body.address).send({
      from: req.body.address,
      gas: '1000000'
    });
    res.send({message: 'Dado adicionado'});
  }else {
    res.status(400).send({message: 'Existem Campos inválidos'});
  }
});

}