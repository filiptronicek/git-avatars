const gen = (start, stop, name, color) =>
  `<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#${start}"/>
                <stop offset="100%" stop-color="#${stop}"/>
            </linearGradient>
        </defs>

        <rect x="0" y="0" rx="15" ry="15" width="120" height="120" fill="url(#Gradient2)"/>
        <text x="50%" y="50%" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" fill="${color}" font-family="sans-serif" font-size="45px">${name}</text>
    </svg>
    `;

module.exports = gen;
