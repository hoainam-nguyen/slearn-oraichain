const eueno = require('./euenoConnected')

async function uploadFile(file, opts,metadata)
{
    const data = await eueno.upload(file, opts, metadata)
    return data
}

module.exports = uploadFile