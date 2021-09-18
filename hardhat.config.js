const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env.local' })


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("credentials", "Prints the private key and infura endpoint", async (taskargs, hre) => {
  console.log('infura endpoint', process.env.INFURA_ENDPOINT)
  console.log('private key', process.env.META_MASK_PRIVATE_KEY)
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337 // make sure everything works
    },
    rinkeby: {
      url: process.env.INFURA_ENDPOINT,
      accounts: [`0x${process.env.META_MASK_PRIVATE_KEY}`]
    }
  }
};
