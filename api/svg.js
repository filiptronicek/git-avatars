function gen(start, stop) {
    return (
    `<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#${start}"/>
                <stop offset="100%" stop-color="#${stop}"/>
            </linearGradient>
        </defs>
        
        <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)"/>
        
    </svg>
    `
    );
}
module.exports = gen;