//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Store {
    string private greeting;
    mapping(address=>uint) public addresses;

    constructor() {
        console.log("Deploying the Store Contract");
    }

    function recieveEther() public payable {
      addresses[msg.sender]+=msg.value;
      console.log("recieving ether");
    }

    function updateBalances() private view {
        console.log("updating balances");
    }
}
