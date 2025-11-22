# Gdrive3.0 - Decentralized File Sharing System

A decentralized version of Google Drive built on the Ethereum Blockchain. This application allows users to securely upload, store, and share files (specifically images) using IPFS and Smart Contracts, ensuring true ownership and privacy of data.

**🚀 Live Demo:** [https://photoshareweb3.netlify.app/](https://photoshareweb3.netlify.app/)

## 📜 Overview

Gdrive3.0 is a Web3 application (dApp) that leverages the power of blockchain to solve the issues of centralized data storage. Unlike traditional cloud storage, files uploaded here are stored on **IPFS (InterPlanetary File System)**, making them immutable and decentralized. Access control is managed entirely by a **Solidity Smart Contract**, allowing users to grant or revoke access to their files for specific wallet addresses.

## ✨ Features

* **Decentralized Storage:** Files are stored on IPFS, ensuring data cannot be tampered with or taken down by a central authority.
* **Smart Contract Security:** Access logic is governed by code on the Ethereum blockchain.
* **File Sharing:** Securely share your images with other users by granting them permission via their wallet address.
* **Access Control:** Revoke access to your files at any time.
* **User-Friendly Interface:** Clean and intuitive React-based UI for interacting with the blockchain.

## 🛠️ Tech Stack

* **Frontend:** React.js, CSS
* **Blockchain:** Solidity, Hardhat, Ethers.js
* **Storage:** IPFS (via Pinata)
* **Deployment:** Netlify (Frontend), Alchemy/Hardhat (Blockchain)

## 📂 Project Structure

```bash
Gdrive3.0/
├── client/             # React Frontend code
│   ├── src/
│   ├── public/
│   └── package.json
├── contracts/          # Solidity Smart Contracts
│   └── Upload.sol
├── scripts/            # Deployment scripts
│   └── deploy.js
├── test/               # Smart contract tests
├── hardhat.config.js   # Hardhat configuration
└── package.json        # Root dependencies
