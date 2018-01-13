export const make_obj = (thumb, link, title) => {
  return {thumb, link, title};
};

export const sendMessage = (res, messagetype) => {
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(messagetype));
};