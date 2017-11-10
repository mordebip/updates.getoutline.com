const { json } = require('micro');

module.exports = async (req, res) => {
  const js = await json(req);
  if (js.version && js.id) {
    console.log(js);
  }
  return '';
};
