import { useState } from "react";
import "./Display.css";
const Display = ({contract,account}) => {
    const [data, setData] = useState("");
    const getdata = async() => {
        let dataArray;
        const OtherAddress = document.querySelector(".address").value;

        if(OtherAddress){
            dataArray = await contract.display(OtherAddress);
            console.log(dataArray);
        } else{
            dataArray = await contract.display(account);
            console.log(dataArray);
        }

        const isEmpty = Object.keys(dataArray).length === 0;

        if(!isEmpty){
            const str = dataArray.toString();
            const str_arr = str.split(",");
            
            const images = str_arr.map( (item, i)=>{
                const url = `https://gateway.pinata.cloud/ipfs//${item.substring(6)}`
                return (
                    <a href={url} key={i} target="_blank" rel="noopener noreferrer"> 
                    <img 
                        src={url}
                        alt="new"
                        className="image-list"
                    ></img>
                </a>
                );
            } );
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