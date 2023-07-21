const Shape = require('./shapes')

describe('render', () => {
    it('should return a string of SVG syntax containing the corresponding text/shape/colors', () => {
      const shape = new Shape('DC', 'white', 'Square', 'red' );
      
      expect(shape.render()).toEqual(`<svg version="1.1"
    width="200" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="200" fill='red'/>
    <text x="25%" y="75%" fill='white' font-size="5em">DC</text>
</svg>`);
    });
  });