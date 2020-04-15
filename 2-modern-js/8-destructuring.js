// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea = ({ radius },{precision = 2}={}) =>
  (PI * radius * radius).toFixed(precision);

//calling without default argument
console.log(
  circleArea(circle)
);
//setting the new property overriding default
console.log(
  circleArea(circle, {precision: 5})
);
