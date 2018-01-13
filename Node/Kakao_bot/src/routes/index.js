import express from 'express';
import message from '../helper/message';
import {sendMessage} from '../helper/helper';
import botService from '../service/bot_service';
import keyword_service from '../service/keyword_service';

const router = express.Router();

const checkUserKey = (req, res, next) => {
  if (req.body.user_key !== undefined) {
    next();
  } else {
    res.status(500).send({error: 'user_key is undefined'});
  }
};

router.get('/keyboard', (req, res) => {
  sendMessage(res, message.buttonsType())
});

router.post('/message', checkUserKey, (req, res) => {
  const _obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content
  };
  console.log(_obj.content);

  botService.selectMenu(req, _obj.content, (err, result) => {
    !err
      ? sendMessage(res, message.baseType(result))
      : sendMessage(res, message.baseType('다시 시도해주세요'))
  });
/*
  if(_obj.content != "직접검색할래요"){

  }else{
    keyword_service(res, _obj.content);
  }*/
});

export default router;