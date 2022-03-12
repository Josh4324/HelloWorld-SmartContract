const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hello World", function () {
  it("Should return the new hello once it's changed", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloworld = await HelloWorld.deploy("Hello, world!");
    await helloworld.deployed();

    expect(await helloworld.sayHello()).to.equal("Hello, world!");

    const setHelloTx = await helloworld.setHello("Hola, mundo!");

    // wait until the transaction is mined
    await setHelloTx.wait();

    expect(await helloworld.sayHello()).to.equal("Hola, mundo!");
  });
});
