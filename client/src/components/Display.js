import { useState } from "react";
import "./Display.css";
const Display = ({contract,account}) => {
    const [data, setData] = useState("");
    const getdata = async() => {
        let dataArray;
        const OtherAddress = document.querySelector(".address").value;

try{
    if(OtherAddress){
        dataArray = await contract.display(OtherAddress);
        console.log(dataArray);
    } else{
        dataArray = await contract.display(account);
        //console.log(dataArray);
    }
}catch(e){
    alert("You Dont have access");
}

    const isEmpty = Object.keys(dataArray).length === 0;

    if(!isEmpty){
    const str = dataArray.toString();
    const str_arr = str.split(",");

        const images = str_arr.map((item, i) => {
        let imageHash = item; // Start with the full string

    // 1. Convert to lowercase and check if the string starts with the known prefix
    if (imageHash.toLowerCase().startsWith('ipfs://')) {
        // 2. Strip only the 'ipfs://' prefix (7 characters long)
        imageHash = imageHash.substring(7); 
    } else {
        // If your contract returns a 6-character prefix like 'data:i', use:
        // imageHash = imageHash.substring(6); 
        // OR better yet, ensure your contract returns clean CIDs.
        
        // For now, assuming you only need to strip 'ipfs://'
    }
    
    // Fallback: If the issue is still there, you might need to strip a fixed 6 characters,
    // but the prefix check is the safest method.
    
    const url = `https://ipfs.io/ipfs/${imageHash}`; 
    // Use Pinata gateway as it's the most reliable source for your pinned files
    
    return (
        <a href={url} key={i} target="_blank" rel="noopener noreferrer"> 
            <img 
                src={url}
                alt="new"
                className="image-list"
            ></img>
        </a>
    );
});
    setData(images);
    } else{
        alert("No Image to display");
    }
};
    return<> 
        <div className="image-list">{data}</div>
        <input type="text" placeholder="Enter Address" className="address"/>
        <button className="center button" onClick={getdata}>get Data</button>
    </>
}
export default Display;