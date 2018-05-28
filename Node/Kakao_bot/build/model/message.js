'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var message = {};

message.buttons = ['직접검색할래요', '오늘의 네이버', '오늘의 다음'];

message.buttonsType = function () {
  return {
    type: 'buttons',
    buttons: message.buttons
  };
};

message.baseType = function (text) {
  return {
    message: {
      text: text
    },
    keyboard: {
      type: 'buttons',
      buttons: message.buttons
    }
  };
};

message.baseText = function (text) {
  return {
    type: 'text',
    message: {
      text: text
    }
  };
};

message.photoType = function (text, url_photo, label, url_button) {
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
        url: url_button
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: message.buttons
    }
  };
};

message.messageButtonType = function (_ref) {
  var text = _ref.text,
      label = _ref.label,
      url = _ref.url;

  return {
    message: {
      text: text,
      message_button: {
        label: label,
        url: url
      }
    },
    keyboard: {
      type: 'buttons',
      buttons: message.buttons
    }
  };
};

message.sendMessage = function (res, type) {
  console.log('res', type);
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(type));
};

exports.default = message;