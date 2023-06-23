//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Kiki is ERC20 {
    uint constant _initial_supply = 200 * (10 ** 18);

    constructor() ERC20("Kiki", "KK") {
        _mint(msg.sender, _initial_supply);
    }
}
