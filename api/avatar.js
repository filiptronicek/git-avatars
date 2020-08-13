const crypto = require("crypto");
const contrast = require("contrast");

const svg = require("./svg");
const mix = require("./colors");

module.exports = (req, res) => {
  let name = req.query.uname;

  if (name)
    name = (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase();
  else
    name = "HI";

  const hash =
      crypto.createHash("md5").update(req.query.usr || "test").digest("hex");

  const colors = [ hash.substr(0, 6), hash.substr(6, 6) ];
  const average = mix(colors[0], colors[1]);

  let pColor = "#ffffff";
  if (contrast(average) === "light")
    pcolor = "#000000";

  res.send(svg(colors[0], colors[1], name, pColor));
};
