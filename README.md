# PhotoShare Web3 (Gdrive3.0)

> Decentralized image upload & sharing dApp — upload images to IPFS, manage ownership and access via a Solidity smart contract, and interact through a React front-end.

**Live demo:** https://photoshareweb3.netlify.app/ :contentReference[oaicite:0]{index=0}  
**Source code:** https://github.com/Meettank3/Gdrive3.0. :contentReference[oaicite:1]{index=1}

---

## Table of contents

- [About](#about)  
- [Features](#features)  
- [Tech stack](#tech-stack)  
- [Demo / Live preview](#demo--live-preview)  
- [Getting started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Install](#install)  
  - [Run locally](#run-locally)  
- [Configuration / Environment variables](#configuration--environment-variables)  
- [Smart contract](#smart-contract)  
- [Usage notes & tips](#usage-notes--tips)  
- [Troubleshooting](#troubleshooting)  
- [Contributing](#contributing)  
- [License](#license)

---

## About

PhotoShare Web3 (Gdrive3.0) is a decentralized image upload and sharing application that stores images on IPFS and uses an Ethereum smart contract to manage image ownership and access control. The user interacts with the app through a React front-end that connects to MetaMask (or any injected Ethereum provider). :contentReference[oaicite:2]{index=2}

---

## Features

- Upload images to IPFS (Pinata or similar pinning service). :contentReference[oaicite:3]{index=3}  
- Register image metadata and ownership on-chain via a Solidity contract. :contentReference[oaicite:4]{index=4}  
- Grant and revoke access to other addresses for shared images. :contentReference[oaicite:5]{index=5}  
- React front-end to upload, view, and fetch images of other users (with access checks). :contentReference[oaicite:6]{index=6}

---

## Tech stack

- **Smart contract:** Solidity (Hardhat project structure included). :contentReference[oaicite:7]{index=7}  
- **Frontend:** React (client folder). :contentReference[oaicite:8]{index=8}  
- **Storage:** IPFS (Pinata recommended). :contentReference[oaicite:9]{index=9}

---

## Demo / Live preview

Open the live app here: **https://photoshareweb3.netlify.app/**. If the page shows "You need to enable JavaScript to run this app", make sure your browser has JS enabled. :contentReference[oaicite:10]{index=10}

---

## Getting started

### Prerequisites

- Node.js (v16+ recommended) and npm  
- MetaMask (or other injected Ethereum wallet) for interacting with the dApp  
- Hardhat (for compiling/deploying contracts) — installed as a dev dependency in the repo

### Install

Clone the repo and install dependencies:

```bash
# clone
git clone https://github.com/Meettank3/Gdrive3.0.git
cd Gdrive3.0

# install root / hardhat deps
npm install

# then install front-end deps
cd client
npm install
