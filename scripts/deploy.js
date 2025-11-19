async function main() {
 // Hardhat automatically makes 'ethers' available globally here
 const Upload = await ethers.getContractFactory("Upload"); 
 const upload = await Upload.deploy();

 await upload.waitForDeployment();

 console.log("Library deployed to:", await upload.getAddress());
}

main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});