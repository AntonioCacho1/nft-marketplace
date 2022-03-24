require("@nomiclabs/hardhat-waffle");

// fs is a utility that allows us to read the file system.
const fs =require("fs")
// privateKey  is the variable used to hold our secret key later in the code.
const privateKey = fs.readFileSync(".secret").toString()
//this our projectId also to not be used in production but for showcase purpose we will plase here.
const projedtId = "c43b167332fc49e8a4cad6260c04b6c2"


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    // this our test net parameters.
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/${projectId}",
      accounts:[privateKey]
    },
    //this is self explainatory but just in case its not clear this is the mainnet parameters.
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/${projectId}",
      accounts:[privateKey]
    },
  },
  solidity: "0.8.4",



};
