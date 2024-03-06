let fields = [
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null,
    'circle'
];

function init(){
    render();
}

function render() {
    let content = document.getElementById('content');
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = '';
            if(fields[index] === 'circle'){
                symbol = generateAnimatedCircleSVG();
        } else if (fields[index] === 'cross'){
            symbol = generateAnimatedCrossSVG();
        }
        tableHTML += `<td>${symbol}</td>`;
        
    }
    tableHTML += '</tr>';
}
    tableHTML += '</table>';
    content.innerHTML = tableHTML;
}

function generateAnimatedCircleSVG() {
    const color = '#00B0EF';
    const size = 70;
    const animationDuration = 125;

    
    const svgHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${size / 2}" cy="${size / 2}" r="0" fill="${color}">
                <animateTransform 
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 ${size / 2} ${size / 2}"
                    to="360 ${size / 2} ${size / 2}"
                    dur="${animationDuration}ms"
                    repeatCount="indefinite"
                />
                <animate attributeName="r" from="0" to="${size / 2}" dur="${animationDuration}ms" fill="freeze" />
            </circle>
        </svg>
    `;

    return svgHTML;
}

function generateAnimatedCrossSVG() {
    const color = '#FFC000';
    const size = 70;
    const animationDuration = 500;

    const svgHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <line x1="${size * 0.1}" y1="${size * 0.1}" x2="${size * 0.9}" y2="${size * 0.9}" stroke="${color}" stroke-width="4">
                <animate attributeName="x2" from="${size * 0.1}" to="${size * 0.9}" dur="${animationDuration}ms" fill="freeze" />
                <animate attributeName="y2" from="${size * 0.1}" to="${size * 0.9}" dur="${animationDuration}ms" fill="freeze" />
            </line>
            <line x1="${size * 0.9}" y1="${size * 0.1}" x2="${size * 0.1}" y2="${size * 0.9}" stroke="${color}" stroke-width="4">
                <animate attributeName="x2" from="${size * 0.9}" to="${size * 0.1}" dur="${animationDuration}ms" fill="freeze" />
                <animate attributeName="y2" from="${size * 0.1}" to="${size * 0.9}" dur="${animationDuration}ms" fill="freeze" />
            </line>
        </svg>
    `;

    return svgHTML;
}


