import express from 'express';
import Account from '../models/account';

const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body.id);
  console.log(req.body.password);
  let usernameRegex = /^[a-z0-9]+$/;
  // CHECK USERNAME FORMAT
  if(!usernameRegex.test(req.body.id)){
    return res.status(400).json({
      error : '조건에 맞게 아이디를 입력해주세요',
      code : 1
    })
  }
  // CHECK PASS LENGTH
  if(req.body.password.length < 6 || typeof req.body.password !== "string"){
    return res.status(400).json({
      error: '비밀번호를 확인해주세요',
      code: 2
    });
  }
  // CHECK USER EXISTANCE
  Account.findOne({id : req.body.id}, (err, exists) => {
    if(err) throw err;
    if(exists){
      return res.status(400).json({
        error : '이미 존재하는 아이디입니다',
        code : 3
      })
    }
    let account = new Account({
      id : req.body.id,
      password : req.body.password
    });

    account.password = account.generateHash(account.password); // make hash
    account.save( err => {
      if(err) throw err;
      return res.json({success : true});
    });
  });
});

router.post('/signin', (req, res) => {
  if(typeof req.body.password !== "string"){
    return res.status(401).json({
      error : '패스워드를 정확히 입력해주세요',
      code : 1
    })
  }
  Account.findOne({id : req.body.id}, (err, account) => {
    if(err) throw err;
    if(!account){
      return res.status(401).json({
        error: '없는 계정입니다.',
        code: 1
      });
    }
    if(!account.validaeHash(req.body.password)){  // 기존 비밀번호 hash 값 비교
      return res.status(401).json({
        error : '비밀번호가 틀렸습니다.',
        code : 1
      })
    }
    // session 저장
    let session = req.session;
    session.loginInfo = {
      _id : account._id,
      id : account.id
    };
    return res.json({
      successs : true
    })
  })
});

router.get('/getinfo', (req, res) => {
  if(typeof req.session.loginInfo === "undefined"){
    return res.status(401).json({
      error : 1
    })
  }
  res.json({info : req.session.loginInfo})
});

router.post('/logout', (req, res) => {
  req.session.destroy(err => { if(err) throw err; });
  return res.json({ sucess: true });
});

export default router;