Here is a professional README file tailored for your project **Gdrive3.0**.

Gdrive3.0 - Decentralized File Sharing System
=============================================

A decentralized version of Google Drive built on the Ethereum Blockchain. This application allows users to securely upload, store, and share files (specifically images) using IPFS and Smart Contracts, ensuring true ownership and privacy of data.

**🚀 Live Demo:** [https://photoshareweb3.netlify.app/](https://photoshareweb3.netlify.app/)

📜 Overview
-----------

Gdrive3.0 is a Web3 application (dApp) that leverages the power of blockchain to solve the issues of centralized data storage. Unlike traditional cloud storage, files uploaded here are stored on **IPFS (InterPlanetary File System)**, making them immutable and decentralized. Access control is managed entirely by a **Solidity Smart Contract**, allowing users to grant or revoke access to their files for specific wallet addresses.

✨ Features
----------

*   **Decentralized Storage:** Files are stored on IPFS, ensuring data cannot be tampered with or taken down by a central authority.
    
*   **Smart Contract Security:** Access logic is governed by code on the Ethereum blockchain.
    
*   **File Sharing:** Securely share your images with other users by granting them permission via their wallet address.
    
*   **Access Control:** Revoke access to your files at any time.
    
*   **User-Friendly Interface:** Clean and intuitive React-based UI for interacting with the blockchain.
    

🛠️ Tech Stack
--------------

*   **Frontend:** React.js, CSS
    
*   **Blockchain:** Solidity, Hardhat, Ethers.js
    
*   **Storage:** IPFS (via Pinata)
    
*   **Deployment:** Netlify (Frontend), Alchemy/Hardhat (Blockchain)
    

📂 Project Structure
--------------------

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Gdrive3.0/  ├── client/             # React Frontend code  │   ├── src/  │   ├── public/  │   └── package.json  ├── contracts/          # Solidity Smart Contracts  │   └── Upload.sol  ├── scripts/            # Deployment scripts  │   └── deploy.js  ├── test/               # Smart contract tests  ├── hardhat.config.js   # Hardhat configuration  └── package.json        # Root dependencies   `

🚀 Getting Started
------------------

Follow these steps to run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) installed.
    
*   [Metamask](https://metamask.io/) wallet extension installed in your browser.
    
*   An account on [Pinata](https://www.pinata.cloud/) (for IPFS API keys).
    

### 1\. Clone the Repository

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/Meettank3/Gdrive3.0.git  cd Gdrive3.0   `

### 2\. Install Dependencies

You typically need to install dependencies for both the root (smart contracts) and the client (frontend).

**Root (Hardhat/Contract dependencies):**

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

**Client (React dependencies):**

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd client  npm install  cd ..   `

### 3\. Compile and Deploy Smart Contract

Start the local Hardhat node (simulated blockchain):

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx hardhat node   `

In a new terminal window, deploy the smart contract to the local network:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx hardhat run --network localhost scripts/deploy.js   `

_Note the contract address generated in the output._

### 4\. Configure Frontend

1.  Open client/src/App.js (or the relevant component file).
    
2.  Update the **Contract Address** variable with the address you got from the deployment step.
    
3.  Ensure the **Artifact/ABI** JSON file is correctly imported from the artifacts folder.
    

### 5\. Run the Application

Start the React frontend:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd client  npm start   `

The app should now be running at http://localhost:3000.

🖼️ How to Use
--------------

1.  **Connect Wallet:** Click the "Connect" button to link your Metamask wallet.
    
2.  **Upload File:**
    
    *   Choose an image file.
        
    *   Click "Upload" to send it to IPFS and record the hash on the blockchain.
        
3.  **Share Access:**
    
    *   Click "Share".
        
    *   Enter the wallet address of the user you want to share files with.
        
4.  **View Files:**
    
    *   Enter an address in the "Get Data" field.
        
    *   If you have permission (or if it's your own address), the images will load.
        

🤝 Contributing
---------------

Contributions are welcome! Please feel free to fork the repository and submit a Pull Request.

📝 License
----------

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

**Developed by** [**Meettank3**](https://www.google.com/search?q=https://github.com/Meettank3)
