// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MetaNode is ERC20 {
    constructor() ERC20("MetaNodeToken", "MetaNode") {}
}
