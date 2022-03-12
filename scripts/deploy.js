const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  */
  const helloWorldContract = await ethers.getContractFactory("HelloWorld");

  // here we deploy the contract
  const deployedContract = await helloWorldContract.deploy("Hello blockgames");

  // Wait for it to finish deploying
  await deployedContract.deployed();

  // print the address of the deployed contract
  console.log("HelloWorld Contract Address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
