const message = {};

message.buttons = ['메뉴', '메뉴'];

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

message.messageButtonType = (text, label, url_button) => {
  return {
    message: {
      text: text,
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

export default message;