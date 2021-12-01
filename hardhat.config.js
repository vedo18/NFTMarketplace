require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privatekey= fs.readFileSync(".secret").toString();
const projectId="5e728503a57c4841ac8beeb7435a3b7f"


module.exports = {
  network:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[privatekey]
    },
    mainnet:{

    }
  },
  solidity: "0.8.4",
};
