import { ethers } from "ethers";
import { useEffect, useState } from 'react';
import './App.css';
import Upload from './artifacts/contracts/Upload.sol/Upload.json';
import Display from "./components/Display";
import FileUplod from "./components/FileUplod";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const[modalOpen,setModalOpen]=useState(false);

  useEffect(()=>{
    const provider= new ethers.BrowserProvider(window.ethereum);

    const loadProvider = async() =>{

      window.ethereum.on("ChainChanged",() =>{
        window.location.reload();
      });

      window.ethereum.on("accountsChanged",() =>{
        window.location.reload();
      });

      if(provider){
        await provider.send("eth_requestAccounts", []); 
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
        
        const contract =new ethers.Contract(contractAddress, Upload.abi, signer);
        console.log(contract);

        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    }

    provider && loadProvider();
  },[]);

  return <div className="App"> 
    <h1 style={{color:"white"}} > G-Drive 3.0</h1>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>

    <FileUplod 
      account={account} 
      provider={provider} 
      contract={contract}
    >
    </FileUplod>

    <Display
      account ={account}
      contract={contract}
    >
    </Display>

    <p style={{color:"white"}}>Account {account ? account:"Not Connected"} </p>
  </div>
}

export default App;
