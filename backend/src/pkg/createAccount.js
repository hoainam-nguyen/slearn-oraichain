const eueno = require('./euenoConnected')
const DATA = require('./const')

async function createAccount()
{
    const data = await eueno.createAccount({
        account: DATA.address,
        projectKey: DATA.projectKey,
    })
    console.log(data)
    return data
}

module.exports = createAccount