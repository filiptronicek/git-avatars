const svg = require('./svg');
const crypto = require('crypto');

module.exports = (req, res) => {
    const hash = crypto.createHash('md5').update(req.query.usr).digest('hex');
    const colors = [hash.substr(0, 6), hash.substr(6, 6)];
    res.send(svg(colors[0], colors[1]));
};