import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Post = new Schema({
  title : String,
  category : String,
  author : String,
  content : String,
  date: {
    created : {type : Date, default : Date.now},
    edited : {type : Date, default : Date.now}
  },
  is_edited : {type : Boolean, default : false},
  like : {type : Number, default : 0}
});

export default mongoose.model('post', Post);
