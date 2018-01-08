import Post from '../models/post';
import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

router.post( '/', (req, res) => {
    if (typeof req.session.loginInfo === 'undefined') {
      return res.status(403).json({
        error: '로그인을 해주세요',
        code: 1
      });
    }
    if (typeof req.body.title !== 'string') {
      return res.status(400).json({
        error: '제목을 제대로 입력해주세요',
        code: 2
      })
    }
    if (req.body.title === '') {
      return res.status(400).json({
        error: '제목은 비어있을 수 없어요',
        code: 2
      })
    }
    let post = new Post({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.session.loginInfo.id
    });

    post.save(err => {
      if (err) throw err;
      return res.json({success: true});
    })
  }
);

router.put('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: '유효하지않은 아이디입니다',
      code: 1
    })
  }
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: "로그인을 해주세요",
      code: 2
    });
  }
  if (req.body.title === '') {
    return res.status(400).json({
      error: '제목을 비어있을 수 없어요'
    })
  }
  Post.findById(req.params.id, (err, post) => {
    if (err) throw err;
    if (!post) {
      return res.status(404).json({
        error: '해당 포스트를 찾을 수 없어요',
        code: 3
      })
    }
    if (post.author != req.session.loginInfo.id) {
      return res.status(403).json({
        error: '당신에게는 권한이 없어요',
        code: 5
      });
    }
    post.content = req.body.content;
    post.date.edited = new Date();
    post.is_edited = true;

    post.save((err, post) => {
      if (err) throw err;
      return res.json({
        success: true,
        post
      })
    })
  })
});

router.delete('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: '유효하지않은 아이디입니다',
      code: 1
    })
  }
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: "로그인을 해주세요",
      code: 2
    });
  }
  Post.findById(req.params.id, (err, post) => {
    if (err) throw err;
    if (!post) {
      return res.status(404).json({
        error: '해당 포스트를 찾을 수 없어요',
        code: 3
      })
    }
    if (post.author != req.session.loginInfo.id) {
      return res.status(403).json({
        error: '당신에게는 권한이 없어요',
        cdoe: 4
      })
    }
    Post.remove({_id: req.params.id}, err => {
      if (err) throw err;
      res.json({suceess: true})
    })
  })
});

router.get('/', (req, res) => {
  Post.find().sort({"_id": -1}).limit(12).exec((err, posts) => {
    if (err) throw err;
    res.json(posts);
  });
});

router.get('/:listType/:id/', (req, res) => {
  let listType = req.params.listType;
  let id = req.params.id;
  if(listType !== 'old' && listType !== 'new'){
    return res.status(400).json({
      error: "존재하지 않는 타입이에요",
      code: 1
    });
  }
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "존재하지않는 id 에요",
      code: 2
    });
  }
  let objId = new mongoose.Types.ObjectId(id);
  if(listType === 'new'){
    Post.find({_id : {$gt : objId}})
      .sort({_id : -1})
      .limit(12)
      .exec((err, posts) => {
        if(err) throw err;
        return res.json(posts);
      });
  }else {
    // GET OLDER MEMO
    Post.find({ _id: { $lt: objId }})
      .sort({_id: -1})
      .limit(6)
      .exec((err, posts) => {
        if(err) throw err;
        return res.json(posts);
      });
  }
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) throw err;
    if (!post) {
      return res.status(404).json({
        error: '해당 포스트를 찾을 수 없어요',
        code: 3
      })
    }
    res.json(post);
  })
});


export default router;
