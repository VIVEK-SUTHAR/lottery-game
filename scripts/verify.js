require("dotenv").config({ path: ".env" });
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");
const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0xC8a588AC302cD1a6A6A8393e4263231eFEc0E8a7",
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
}
main()