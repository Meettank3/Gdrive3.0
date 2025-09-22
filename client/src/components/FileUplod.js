import axios from "axios";
import { useState } from "react";
import "./FileUplod.css";

const FileUplod =({account, provider, contract}) => {
    const [file, setFile] = useState(null); 
    const [fileName, setFileName] = useState("No Image Selected");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(file){
            try{
                const formData = new FormData();
                formData.append("file",file);

                const resFile = await axios({
                    method:"post",
                    url:"https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers:{
                        pinata_api_key: `bf4c224125874aea52e5`,
                        pinata_secret_api_key: `0792326596d924223842d5a74dae00b6d525bef99e3d70d391827389c28cc7bc`,
                        "Content-Type": "multipart/form-data",
                    }
                });
                const ImageHash = `ipfs://${resFile.data.IpfsHash}`;
                contract.add(account, ImageHash);
                alert("File Uploaded Successfully");
                setFileName("No Image Selected");
                setFile(null);

            } catch(error){
                alert("Error while uploading the file",error);
                console.log(error);
            }
        }
    };

    const retrieveFile =  (e) => {
        const data = e.target.files[0]; //coz it stores array of file objects
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend= () =>{
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };

    return (
        <div className="top">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className="choose">
            Choose Image
            </label>
            <input
            disabled={!account}
            type="file"
            id="file-upload"
            name="data"
            onChange={retrieveFile}
            />
            <span className="textArea">Image: {fileName}</span>
            <button type="submit" className="upload" disabled={!file}>Upload File</button>
        </form>
        </div>
    );
}

export default FileUplod;