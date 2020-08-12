/* Copyright (c) 2019 Andy, 2020 GirkovArpa https://github.com/GirkovArpa/hex-color-mixer/blob/master/LICENSE */

const hex2dec = (hex) => {
  return hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((n) => parseInt(n, 16));
};

const rgb2hex = (r, g, b) => {
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  r = Math.min(r, 255);
  g = Math.min(g, 255);
  b = Math.min(b, 255);
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
};

const rgb2cmyk = (r, g, b) => {
  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  const k = Math.min(c, m, y);
  c = (c - k) / (1 - k);
  m = (m - k) / (1 - k);
  y = (y - k) / (1 - k);
  return [c, m, y, k];
};

const cmyk2rgb = (c, m, y, k) => {
  let r = c * (1 - k) + k;
  let g = m * (1 - k) + k;
  let b = y * (1 - k) + k;
  r = (1 - r) * 255 + 0.5;
  g = (1 - g) * 255 + 0.5;
  b = (1 - b) * 255 + 0.5;
  return [r, g, b];
};

const mix_cmyks = (...cmyks) => {
  const c =
    cmyks.map((cmyk) => cmyk[0]).reduce((a, b) => a + b, 0) / cmyks.length;
  const m =
    cmyks.map((cmyk) => cmyk[1]).reduce((a, b) => a + b, 0) / cmyks.length;
  const y =
    cmyks.map((cmyk) => cmyk[2]).reduce((a, b) => a + b, 0) / cmyks.length;
  const k =
    cmyks.map((cmyk) => cmyk[3]).reduce((a, b) => a + b, 0) / cmyks.length;
  return [c, m, y, k];
};

const mix_hexes = (...hexes) => {
  const rgbs = hexes.map((hex) => hex2dec(hex));
  const cmyks = rgbs.map((rgb) => rgb2cmyk(...rgb));
  const mixture_cmyk = mix_cmyks(...cmyks);
  const mixture_rgb = cmyk2rgb(...mixture_cmyk);
  const mixture_hex = rgb2hex(...mixture_rgb);
  
  return mixture_hex;
};

module.exports = mix_hexes;
