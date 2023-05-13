const DATA = require('../pkg/const')
const Eueno = require('@eueno/lib-node')
const axios = require('axios');


async function readUrl(url) {
  const info = await axios.get(url)
  return info.data
}


const forumController = {
  checkBot: async(req, res, next) => {
    // Kiểm tra xem user đã có hoặc không tồn tại trong eueno
    // user id
    const botid = req.query.id

    // define eueno client
    const eueno = new Eueno({
      endpoint: 'https://v2-developers.eueno.io',
    });

    // request
    const resp = await eueno.getObjectLists({
      projectKey: DATA.projectKey,
      projectId: DATA.projectId,
      path: `bot/`
    })
    
    const folders = resp.data.folders;

    // Check
    if (folders.includes(botid)) {
      return res.status(200).json({'msg': 'Finish!', 'is_exist': true})
    } else {
      return res.status(200).json({'msg': 'Finish!', 'is_exist': false})
    }
  },

  createBot: async (req, res, next) => {
    try {

      // Lấy thông tin gửi từ client
      const data = {
        id: req.body.id,
        bot_version: req.body.bot_version,
        owner: req.body.owner,
        metadata: req.body.metadata,
        comments: req.body.comments,
        config: req.body.config,
        created_at: req.body.created_at,
        used_by: req.body.used_by,
      }
    //   console.log(data)
    //   res.status(200).json(data)

    //   Define eueno 
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });


      const _ = await eueno.createFolder(
        {
          projectId: DATA.projectId,
          path: `bot/${data.id}/`,
          projectKey: DATA.projectKey,
        }
      )
      // chuyển data client gửi về dạng file
      const file_obj = Buffer.from(JSON.stringify(data))
      try {
        const file_upload = await eueno.upload(file_obj,
          {
            projectKey: DATA.projectKey,
            key: {
              walletPublicKey: DATA.publicKey
            },
          },
          {
            projectId: DATA.projectId,
            path: `bot/${data.id}`,
            filename: `${data.id}_${data.bot_version}.json`,
            contentLength: 12313,
            contentType: 'application/json',
            method: 'UNENCRYPTED',
            keepPath: false,
          },
        )
        // console.log(file_upload)
        return res.status(200).json(file_upload)
      }
      catch (error) {
        console.log(error)
        return res.status(500).json({ error })
      }
    }
    catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  },


  getBot: async (req, res, next) => {
    try {

      const botid = req.query.id 
      const bot_version = req.query.bot_version
    //   console.log(botid)
    //   console.log(bot_version)
      // 
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });

      try {
        const resp_obj = await eueno.getObjectLists({
          projectKey: DATA.projectKey,
          projectId: DATA.projectId,
          path: `bot/${botid}`
        })
        // console.log(resp_obj.data)
        const url = resp_obj.data.files[0].url

        resp_obj.data.files[0].name
        

        
        for(let i=0; i<resp_obj.data.files.length;i++) {
          if (resp_obj.data.files[i].name === `${botid}_${bot_version}.json`) {
            const info = await readUrl(resp_obj.data.files[i].url)
            return res.status(200).json({'msg':'Finish.', 'data':info})
          }
        }

      }
      catch (error) {
        console.log("ERROR", error)
        return res.status(500).json(error)
      }
    } catch (error) {
      console.log("ERROR", error)
      return res.status(500).json(error)
    }
  },


  updateBot: async (req, res, next) => {
    // lấy data từ client
    const data = {
        id: req.body.id,
        bot_version: req.body.bot_version,
        owner: req.body.owner,
        metadata: req.body.metadata,
        comments: req.body.comments,
        config: req.body.config,
        created_at: req.body.created_at,
        used_by: req.body.used_by,
      }

    const eueno = new Eueno({
      endpoint: 'https://v2-developers.eueno.io',
    });

    const resp_obj = await eueno.getObjectLists({
      projectKey: DATA.projectKey,
      projectId: DATA.projectId,
      path: `bot/${data.id}`
    })

    for(let i=0; i<resp_obj.data.files.length;i++) {
      if (resp_obj.data.files[i].name === `${data.id}_${data.bot_version}.json`) {
        const resp_del = await eueno.deleteObject({
          projectKey: DATA.projectKey,
          projectId: DATA.id,
          fileId: resp_obj.data.files[i].id 
        })        
      }
    }

    const file_upload = await eueno.upload(
      Buffer.from(JSON.stringify(data)),
      {
        projectKey: DATA.projectKey,
        key: {
          walletPublicKey: DATA.publicKey
        },
      },
      {
        projectId: DATA.projectId,
        path: `bot/${data.id}`,
        filename: `${data.id}_${data.bot_version}.json`,
        contentLength: 12313,
        contentType: 'application/json',
        method: 'UNENCRYPTED',
        keepPath: false,
      },
    )
    return res.status(200).json(file_upload)
  }
}

module.exports = forumController