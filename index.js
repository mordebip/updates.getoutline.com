require('dotenv').config({ silent: true });
const { json, send } = require('micro');
const ua = require('universal-analytics');

module.exports = async (req, res) => {
  let data;

  try {
    data = await json(req);
  } catch (err) {
    return send(res, 422, {
      code: 'invalid_json',
      message: 'Please submit a valid JSON payload'
    });
  }

  if (data.version && data.id) {
    const visitor = ua(process.env.GOOGLE_ANALYTICS_ID, data.id, { https: true });
    visitor.event("Open Source", "Load", "Version", data.version).send();
  }

  send(res, 200, {});
};
