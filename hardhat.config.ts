import type { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades"

require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY as string
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY as string
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY as string

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      url:
        "https://eth-sepolia.g.alchemy.com/v2/" + ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY],
      gasPrice: 30000000000, // 30 Gwei
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
