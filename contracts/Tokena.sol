// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Tokena is ERC20 {
    

    constructor(uint256 _supply) ERC20("Tokena", "TKN") {
     _mint(msg.sender, _supply * (10 ** decimals()));
    }
   
    
}
