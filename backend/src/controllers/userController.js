const DATA = require('../pkg/const')
const Eueno = require('@eueno/lib-node')
const axios = require('axios');


async function readUrl(url) {
  const info = await axios.get(url)
  return info.data
}


const userController = {
  checkUser: async(req, res, next) => {
    // Kiểm tra xem user đã có hoặc không tồn tại trong eueno
    // user id
    const userID = req.query.id 

    // define eueno client
    const eueno = new Eueno({
      endpoint: 'https://v2-developers.eueno.io',
    });

    // request
    const resp = await eueno.getObjectLists({
      projectKey: DATA.projectKey,
      projectId: DATA.projectId,
      path: `user/`
    })
    
    const folders = resp.data.folders;

    // Check
    if (folders.includes(userID)) {
      return res.status(200).json({'msg': 'Finish!', 'is_exist': true})
    } else {
      return res.status(200).json({'msg': 'Finish!', 'is_exist': false})
    }
  },

  createUser: async (req, res, next) => {
    try {

      // Lấy thông tin gửi từ client
      const data = {
        id: req.body.id,
        owallet_response: req.body.owallet_response,
        metadata: req.body.metadata,
        user_resource: req.body.user_resource,
        config: req.body.config
      }

      // Define eueno 
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });


      const _ = await eueno.createFolder(
        {
          projectId: DATA.projectId,
          path: `user/${data.id}/`,
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
            path: `user/${data.id}`,
            filename: 'info.json',
            contentLength: 12313,
            contentType: 'application/json',
            method: 'UNENCRYPTED',
            keepPath: false,
          },
        )
        console.log(file_upload)
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


  getUser: async (req, res, next) => {
    try {

      const userID = req.query.id 

      // 
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });

      try {
        const resp_obj = await eueno.getObjectLists({
          projectKey: DATA.projectKey,
          projectId: DATA.projectId,
          path: `user/${userID}`
        })

        const url = resp_obj.data.files[0].url
        resp_obj.data.files[0].name

        
        for(let i=0; i<resp_obj.data.files.length;i++) {
          if (resp_obj.data.files[i].name === 'info.json') {
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


  updateUser: async (req, res, next) => {
    // lấy data từ client
    const data = {
      id: req.body.id,
      owallet_response: req.body.owallet_response,
      metadata: req.body.metadata,
      user_resource: req.body.user_resource,
      config: req.body.config
    }

    const eueno = new Eueno({
      endpoint: 'https://v2-developers.eueno.io',
    });

    const resp_obj = await eueno.getObjectLists({
      projectKey: DATA.projectKey,
      projectId: DATA.projectId,
      path: `user/${data.id}`
    })

    for(let i=0; i<resp_obj.data.files.length;i++) {
      if (resp_obj.data.files[i].name === 'info.json') {
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
        path: `user/${data.id}`,
        filename: 'info.json',
        contentLength: 12313,
        contentType: 'application/json',
        method: 'UNENCRYPTED',
        keepPath: false,
      },
    )
    return res.status(200).json(file_upload)
  }
}

module.exports = userController