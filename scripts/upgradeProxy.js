const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
// Make sure to copy-paste the Proxy contract address (which currently points to VendingMachineV1) into the above script!
const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();
