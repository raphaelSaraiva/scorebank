const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');


const providerTest = new HDWalletProvider(
        (process.env.mnemonic || 'guilt enable hollow permit design oblige update live grape lake virtual fit'),
        (process.env.endpoint || 'https://rinkeby.infura.io/v3/816d3ae0c2c743a1ba5b96814bcb260d')
);

const web3Test = new Web3(providerTest);   


const instanceScoreBank = new web3Test.eth.Contract(
        JSON.parse(process.env.abi || '[{"constant": false,"inputs": [{"name": "id","type": "string"},{"name": "score","type": "uint256"}],"name": "alterarScore","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "id","type": "string"},{"name": "score","type": "uint256"}],"name": "incluirScore","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "novoProprietario","type": "address"}],"name": "mudarProprietario","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"constant": true,"inputs": [],"name": "proprietario","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "id","type": "string"}],"name": "recuperarScore","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]'),
        (process.env.contractAddress || '0xEadEf17E9c0eB0149c35bAa22aC223e97857fD95')
);

instanceScoreBank.setProvider(providerTest);
      
module.exports = {
    instanceScoreBank,
    web3Test
};