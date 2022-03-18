const Tokena = artifacts.require("Tokena");

contract('Tokena', (accounts) => {

    before(async() => {
        tokena = await Tokena.deployed()
        console.log("Tokena Address: ", tokena.address)           //after deploying to rinkeby with the js, we came to add this line so that everytime we test, our code will not be trasferring tokens to one another
    })

    it('gives the owner of the token 1M tokens', async () => {
        let balance = await tokena.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance,'1000000',"Balance should be 1M tokens for contract creator")
    })
    it('can transfer tokens  between accounts', async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await tokena.transfer(accounts[1],amount, {from: accounts[0]})

        let balance = await tokena.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance,'1000',"Balance should be 1k tokens for contract creator")


    })
})