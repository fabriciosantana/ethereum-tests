require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "kovan",
  networks:{
    hardhat:{

    },
    kovan: {
      url: "https://kovan.infura.io/v3/c6694c8069784d1e90309bed25d0743d",
      chainId: 42,
      from: "0x82b1BF154B55eCC5E45c7E24a6283da06368000D",
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: ["0x30be48c30f3d9ec1a4fe78c72696dd87338ba2f397d809e81e0a9117f0542c53"]
    }
  },
  solidity: {
    version: "0.8.4"
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    caches: "./cache",
    artifacts: "./artifacts"
  },
  mocha:{
    timeout: 20000
  }
};

