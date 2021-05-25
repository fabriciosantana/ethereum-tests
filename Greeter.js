var Web3 = require('web3');
var contract =  require('web3-eth-contract');

//var web3 = new Web3(http://127.0.0.1:8545);

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
contract.setProvider('http://localhost:8545');

//web3.eth.getChainId(console.log());


//web3.eth.getAccounts(console.log);

web3.eth.getAccounts()
.then(console.log())

web3.eth.getBlockNumber()
.then(console.log)

console.log(web3.eth.defaultBlock)

web3.eth.getBalance('0xDde08E7878aAe0D454e46dE4293C06d449A0cC85')
.then(console.log)

web3.eth.getCode('0xDde08E7878aAe0D454e46dE4293C06d449A0cC85')
.then(console.log)


web3.eth.getBlock(0)
.then(console.log);


web3.eth.getBlock(1)
.then(console.log);


web3.eth.getTransaction('0x1acb4d02df309c112433fcfdedb1b79bc72ed7e93d61b4241098b81da410ab75')
.then(console.log);


web3.eth.defaultAccount = '0x086b6f17b5BAEd54668023Fdc94f07b1BA60C41B';
console.log(web3.eth.defaultAccount)

//web3.eth.defaultAccount = '0x086b6f17b5BAEd54668023Fdc94f07b1BA60C41B';
console.log(web3.eth.Contract.defaultAccount)
console.log(web3.eth.Contract.defaultBlock)







/*
console.log(Web3.utils)
console.log("### Web3.version <<<")
console.log(Web3.version)
console.log("### Web3.givenProvider <<<")
console.log(Web3.givenProvider)
console.log("### Web3.providers <<<")
console.log(Web3.providers)
console.log("### Web3.modules <<<")
console.log(Web3.modules)

console.log("### Web3.modules.Eth <<<")
console.log(Web3.modules.eth)

console.log("### Web3.modules.Net <<<")
console.log(Web3.modules.Net)

console.log("### Web3.modules.Personal <<<")
console.log(Web3.modules.Personal)


console.log("### Web3.modules.Eth <<<")
console.log(web3.modules.eth)
*/