require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');

dotenv.config();

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
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 42,
      from: `https://kovan.infura.io/v3/${process.env.FROM_ADDRESS}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY}`]
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

