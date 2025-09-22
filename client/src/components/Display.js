import "./Display.css";
const Display = (account,contract) => {
    const getdata = async() => {

    };
    return<> 
        <div className="image-list">Image Display</div>
        <input type="text" placeholder="Enter Address" className="address"/>
        <button className="center button" onClick={getdata}>get Data</button>
    </>
}
export default Display;