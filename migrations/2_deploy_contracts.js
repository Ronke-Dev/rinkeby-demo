const Tokena = artifacts.require("Tokena");

 module.exports = function(deployer) {
    deployer.deploy(Tokena, 1000000);
  };