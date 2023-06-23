async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();

  console.log(
    "Account balance:",
    await hre.ethers.utils.formatEther(weiAmount)
  );

  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
  const Token = await hre.ethers.getContractFactory("Kiki");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
