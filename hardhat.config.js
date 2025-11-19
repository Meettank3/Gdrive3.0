require("@nomicfoundation/hardhat-verify"); // Verification plugin
require('dotenv').config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths:{
    artifacts: './client/src/artifacts'
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, 
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
