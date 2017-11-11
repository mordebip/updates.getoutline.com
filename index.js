const { json, send } = require('micro');

module.exports = async (req, res) => {
  const js = await json(req);
  if (js.version && js.id) {
    console.log(js);
  }
  send(res, 200, {});
};
