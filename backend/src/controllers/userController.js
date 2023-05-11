const DATA = require('../pkg/const')
const Eueno = require('@eueno/lib-node')
const axios = require('axios');

async function readUrl(url) {
  const info = await axios.get(url)
  return info.data
}

const userController = {
  createUser: async (req, res, next) => {
    try {
      // Lấy thông tin gửi từ client
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
      // Tạo 1 foder mới trên eueno với tên foder là bech32Address
      const foder_new = await eueno.createFolder(
        {
          projectId: DATA.projectId,
          path: `user/${data.bech32Address}`,
          projectKey: DATA.projectKey,
        }
      )
      // nếu như foder đã tồn tại
      if (foder_new.message == "Folder existed") {

        // Check xem trong foder đó đã có file info.json chưa:
        // 1. Đọc foder của user
        // 2. Nếu có file info.json thì trả về "User is existed"

        // Bước 1
        const foder = await eueno.getObjectLists({
          projectKey: DATA.projectKey,
          projectId: DATA.projectId,
          path: `user/${data.bech32Address}`
        })
        // Bước 2
        console.log(foder)
        if (foder.data.files.length) {
          return res.status(200).json("User is existed")
        }
      }
      // chuyển data clien gửi về dạng file
      const file = Buffer.from(JSON.stringify(data))
      // console.log(file);
      // Upload 1 file chứa thông tin của user lên eueno với path là : path: `user/${data.bech32Address}`,
      try {
        const file_upload = await eueno.upload(file,
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
  getUser: async (req, res, next) => {
    try {
      // Lấy thông tin từ client
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
      }
      // 
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });
      // console.log(data);
      try {

        // Đọc foder của user
        const foder = await eueno.getObjectLists({
          projectKey: DATA.projectKey,
          projectId: DATA.projectId,
          path: `user/${data.bech32Address}`
        })
        if (!foder.data.files.length) {
          return res.status(200).json("User is not existed");
        }
        else {
          // console.log(foder);
          // sau khi đọc foder thì nó sẽ trả về list các foder và list các file trong foder đó
          // bởi file trong foder chỉ có 1 file
          // và thông chi tiết file có url để đọc thông tin file đó
          const url = foder.data.files[0].url
          const info = await readUrl(url)
          console.log(info)
          return res.status(200).json(info)
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
    // đọc foder của user
    const foder = await eueno.getObjectLists({
      projectKey: DATA.projectKey,
      projectId: DATA.projectId,
      path: `user/${data.bech32Address}`
    })
    // xóa file cũ
    const file_delete = await eueno.deleteObject({
      projectKey: DATA.projectKey, 
      projectId: DATA.id,
      fileId: foder.data.files[0].id // id của file cần xóa
    })
    // upload file mới lên
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