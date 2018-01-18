const message = {};

message.buttons = ['오늘의 네이버', '오늘의 다음', '직접검색할래요'];

message.buttonsType = () => {
  return {
    type: 'buttons',
    buttons: message.buttons
  }
};

message.baseType = (text) => {
  return {
    message: {
      text: text,
    },
    keyboard: {
      type: 'buttons',
      buttons: message.buttons
    }
  }
};

message.baseText = (text) => {
  return {
    type: 'text',
    message: {
      text: text
    }
  }
};

message.photoType = (text, url_photo, label, url_button) => {
  return {
    message: {
      text: text,
      photo: {
        url: url_photo,
        width: 640,
        height: 480
      },
      message_button: {
        label: label,
        url: url_button,
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: message.buttons
    }
  }
};

message.messageButtonType = ({text, label, url}) => {
  return {
    message: {
      text,
      message_button: {
        label,
        url,
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: message.buttons
    }
  }
};

message.sendMessage = (res, type) => {
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(type));
};

export default message;