const svg = require("./svg");
const crypto = require("crypto");
const contrast = require("contrast");

const mix = require("./colors");

const avrg = (x, y) => {
  return (hexToDec(x) + hexToDec(y)) / 2;
};

module.exports = (req, res) => {
  let name = req.query.uname;

  if (name)
    name = (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase();
  else name = "HI";

  const hash = crypto
    .createHash("md5")
    .update(req.query.usr || "test")
    .digest("hex");
  const colors = [hash.substr(0, 6), hash.substr(6, 6)];

  console.table(colors);
  console.log(mix(colors[0], colors[1]));

  res.send(svg(colors[0], colors[1], name));
};
