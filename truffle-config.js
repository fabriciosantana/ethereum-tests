console.log("### STARTING MIGRATION <<<");

const HDWalletProvider = require("@truffle/hdwallet-provider"); //require("truffle-hdwallet-provider");
var PrivateKeyProvider = require("truffle-privatekey-provider");
// 12-word mnemonic
const mnemonic = "round sort round tilt apart seek vehicle absurd hire trophy clump buyer myself theme fog";
//process.env.NMEMONIC;
var ropsten = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/c6694c8069784d1e90309bed25d0743d");
var kovan = new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/c6694c8069784d1e90309bed25d0743d", 0, 1);

console.log("### mnemonic: " + mnemonic + " <<<");
console.log("### ropsten address: " + ropsten.addresses[0] + " <<<");
console.log("### kovan address: " + kovan.addresses + " <<<");

const ethers = require('ethers');

//let provider = new ethers.providers.Web3Provider(web3.currentProvider);
let provider = new ethers.providers.InfuraProvider("kovan", "c6694c8069784d1e90309bed25d0743d");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    truffleNet: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
      defaultEtherBalance: 500,
      from:"0xa4abdf7e66090bc9ee750fe3920b431d08f73ad3"
    },
    ganacheNet: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      defaultEtherBalance: 500,
      from:"0x974517d96d096DF0828A4660489D4604741F2C40"
    },
    ganacheclidocker: {
      network_id: "*",
      port: 8566,
      host: "127.0.0.1"
    },
    ganachecoredocker: {
      network_id: "*",
      port: 8567,
      host: "127.0.0.1"
    },
    kovan: {
      /*provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/c6694c8069784d1e90309bed25d0743d");
      },*/
      provider: () => new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/c6694c8069784d1e90309bed25d0743d"),
      //provider: new HDWalletProvider(mnemonic, "wss://kovan.infura.io/ws/v3/c6694c8069784d1e90309bed25d0743d"),
      //provider: () => kovan,
      //provider: () => new PrivateKeyProvider("30be48c30f3d9ec1a4fe78c72696dd87338ba2f397d809e81e0a9117f0542c53", "https://kovan.infura.io/v3/c6694c8069784d1e90309bed25d0743d"),
      //provider: () => provider,
      network_id: 42,
      from:"0x82b1BF154B55eCC5E45c7E24a6283da06368000D",
      timeoutBlocks: 50000,
      websockets: true,
      networkCheckTimeout: 10000000,
      gas: 3525872,
      gasPrice: 62000000000
    },
    ropsten: {
      provider: function() {
        return ropsten;
      },
      network_id: 3,
      from:"0x82b1BF154B55eCC5E45c7E24a6283da06368000D",
    }
  },
  mocha: {
    enableTimeouts: false
  },
  compilers: {
    solc: {
      version: "0.8.4"
    }
  }
};
db: {
  enabled: false;
};
