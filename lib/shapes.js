function renderShape(shape) {
    switch (shape) {
        case 'Square':
            return '<rect x="0" y="0" width="200" height="200" />';
        case 'Triangle':
            return '<polygon points="150, 18 244, 182 56, 182" />';
        case 'Circle':
            return '<circle cx="100" cy="100" r="100" />';
        default:
            throw new Error('Invalid shape provided.');
    }
}

class Shape {
    constructor(text, textcolor, shape, shapecolor) {
        if (text.length > 3) {
            throw new Error('`logo text` cannot be more than 3 characters.');
        }
       
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
    render() {
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            ${renderShape(this.shape)} fill="${this.shapecolor}" />
            <text x="25%" y="75%" fill="${this.textcolor}" font-size="5em">${this.text}</text>
        </svg>`;
    }
}

module.exports = Shape;






