import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // 암호화

const Schema = mongoose.Schema; // 틀 생성

const Account = new Schema({
  id : String,
  password : String,
  created : {type : Date, default : Date.now}
});

// arrow 메소드를 사용하시면 제대로 작동하지 않는다.
Account.methods.generateHash = function(password){
  return bcrypt.hashSync(password, 8);
};

Account.methods.validaeHash = function(password){
  return bcrypt.compareSync(password, this.password);
};

// 실질적 접근 accounts로 생성 따로 이름을 지어주고싶다면 3번째인자로 생성
export default mongoose.model('account', Account);