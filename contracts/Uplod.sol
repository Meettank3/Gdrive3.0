// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract Upload {

    struct Access{
        address user;
        bool acccess;
    }

    mapping (address => mapping (address => bool)) ownership;
    mapping (address => string[]) value;
    mapping (address => Access[] ) accessList;
    mapping (address => mapping (address => bool)) previousData;

    function add(address _user, string memory _url) external {
        value[_user].push(_url);
    }

    function add(address user) external  {
        ownership[msg.sender][user] = true;

        if(previousData[msg.sender][user] == true) {
            
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == user) {
                    accessList[msg.sender][i].acccess = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(user,true));  
            previousData[msg.sender][user]=true;
        }
    }

    function disallow(address user) public  {
        ownership[msg.sender][user] = false;
        
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == user) {
                accessList[msg.sender][i].acccess = false;
            }
        }
    }

    function display(address _user) external view returns (string[] memory) {
        require( _user == msg.sender || ownership[_user][msg.sender], "You Dont have access");
        return value[_user];
    }

    function shareData() public view returns (Access[] memory) {
        return accessList[msg.sender];
    }
}