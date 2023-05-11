const eueno = require('./euenoConnected')
const DATA = require('./const')

async function createFoder( path)
{
    data = await eueno.createFolder(
        {
          projectId: DATA.projectId,
          path: path,
          projectKey: DATA.projectKey,
        },
      )
    console.log(data)
    return data
}

module.exports = createFoder