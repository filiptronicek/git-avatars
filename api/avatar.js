import {createHash} from "crypto";
// import contrast from "contrast";

import svg from "./svg";
// import mix from "./colors";

export default (req, res) => {
  let name = req.query.uname;

  if (name) {
    name = (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase();
  } else
    name = "HI";

  const hash = createHash("md5").update(req.query.usr || "test").digest("hex");

  const colors = [ hash.substr(0, 6), hash.substr(6, 6) ];
  // const average = mix(colors[0], colors[1]);

  const pColor = "#ffffff";
  // if (contrast(average) === "light") pcolor = "#000000";
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg(colors[0], colors[1], name, pColor));
};
