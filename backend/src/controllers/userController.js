const uploadFile = require('../pkg/uploadFile')
const createFoder = require('../pkg/createFoder')
const createAccount = require('../pkg/createAccount')
const fs = require('fs')
const DATA = require('../pkg/const')
const Eueno = require('@eueno/lib-node')
const crypto = require('crypto');
const https = require('https');
const axios = require('axios');

function encode(num) {
  const bytes = Buffer.allocUnsafe(8);
  bytes.writeBigInt64BE(BigInt(num));
  const hash = crypto.createHash('sha256').update(bytes).digest();
  return hash.toString('base64').replace(/[+/]/g, '_').replace(/=/g, '');
}
async function readUrl(url) {
  const info = await axios.get(url)
  return info.data
}

const userController = {
  createUser: async (req, res, next) => {
    try {
      const data = {
        name: req.body.name,
        algo: req.body.algo,
        bech32Address: req.body.bech32Address,
        email: req.body.email,
        phone: req.body.phone,
        nickname: req.body.nickname,
        addresss: req.body.Addresss,
        age: req.body.age,
        bio: req.body.bio,
        key: req.body.key
      }
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });
      // Tạo 1 foder mới trên eueno
      const foder_new = await eueno.createFolder(
        {
          projectId: DATA.projectId,
          path: `user/${data.bech32Address}`,
          projectKey: DATA.projectKey,
        }
      )
      // nếu như foder đã tồn tại thì báo Foder đã tồn tại
      if (foder_new.message == "Folder existed") {
        return res.status(200).json(foder_new)
      }
      // Upload 1 file chứa thông tin của user lên eueno
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
          path: `user/${data.bech32Address}`,
          filename: 'info.json',
          contentLength: 12313,
          contentType: 'application/json',
          method: 'UNENCRYPTED',
          keepPath: false,
        },
      )

      res.status(200).json(file_upload)

    } catch (error) {
      console.log(error)
    }
  },
  getUser: async (req, res, next) => {
    try{
      const data = {
        name: req.body.name,
        algo: req.body.algo,
        bech32Address: req.body.bech32Address,
        email: req.body.email,
        phone: req.body.phone,
        nickname: req.body.nickname,
        addresss: req.body.Addresss,
        age: req.body.age,
        bio: req.body.bio,
        key: req.body.key
      }
      // 
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });
      // read foder of user
      // console.log(data);
      const foder = await eueno.getObjectLists({
        projectKey: DATA.projectKey,
        projectId: DATA.projectId,
        path: `user/${data.bech32Address}`
      })
      if(!foder.data.files.length)
      {
        return res.status(200).json("User is not existed");
      }
      else{
        // console.log(foder);
        const url = foder.data.files[0].url
        const info = await readUrl(url)
        // console.log(info)

        return res.status(200).json(info)
      }
 
    }catch(error){
      console.log("ERROR",error)
    }
  },
  updateUser: async (req, res, next) => {
    // res.send("Update here"
    const data = {
      name: req.body.name,
      algo: req.body.algo,
      bech32Address: req.body.bech32Address,
      email: req.body.email,
      phone: req.body.phone,
      nickname: req.body.nickname,
      addresss: req.body.Addresss,
      age: req.body.age,
      bio: req.body.bio,
      key: req.body.key
    }
    const eueno = new Eueno({
      endpoint: 'https://v2-developers.eueno.io',
    });
    const foder = await eueno.getObjectLists({
      projectKey: DATA.projectKey,
      projectId: DATA.projectId,
      path: `user/${data.bech32Address}`
    })
    // console.log(foder.data.files[0].id);
    // res.status(200).json(foder.data.files);
    const file_delete = await eueno.deleteObject({
      projectKey: DATA.projectKey,
      projectId: DATA.id,
      fileId: foder.data.files[0].id
    })
    // console.log(file_delete)
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
        path: `user/${data.bech32Address}`,
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