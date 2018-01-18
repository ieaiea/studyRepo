import express from 'express';
import message from '../model/message';
import service from '../service/service';

const router = express.Router();

const checkUserKey = (req, res, next) => {
  if (req.body.user_key !== undefined) {
    next();
  } else {
    res.status(500).send({error: 'user_key is undefined'});
  }
};

router.get('/keyboard', (req, res) => {
  message.sendMessage(res, message.buttonsType())
});

router.post('/message', checkUserKey, (req, res) => {
  const _obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content
  };

  service(req, _obj.content, (err, result) => {
    !err
      ? message.sendMessage(res, result)
      : message.sendMessage(res, message.baseType('다시 시도해주세요'))
  });
});

export default router;