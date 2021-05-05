// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4; 

contract Caller {

    function someAction(address addr) public returns(uint) {
        Callee c = Callee(addr); 
        return c.getValue(100); 
    } 
    
    function storeAction(address addr) public returns(uint) {
        Callee c = Callee(addr);
        c.storeValue(100);
        return c.getValues(); 
    }
    
    /*function someUnsafeAction(address addr) public {
       addr.call(bytes4(keccak256("storeValue(uint256)")), 100); 
    }*/

}
    
    abstract contract Callee {
        function getValue(uint initialValue) public virtual returns(uint);
        function storeValue(uint value) public virtual;
        function getValues() public virtual returns(uint) ;
    } 