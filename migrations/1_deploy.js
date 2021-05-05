const Migrations = artifacts.require("Migrations");
const Callee = artifacts.require("Callee");
const Caller = artifacts.require("Caller");
const Guestbook = artifacts.require("Guestbook");
const Greeter = artifacts.require("Greeter");
const Counter = artifacts.require("Counter");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Callee);
  deployer.deploy(Caller);
  deployer.deploy(Guestbook);
  deployer.deploy(Greeter);
  deployer.deploy(Counter);
};
