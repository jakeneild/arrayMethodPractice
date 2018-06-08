const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(function x(a, b){return (a >= b)? 1 : -1}).filter(function y(e){if(e<20){return e}}).map(function z(e){return e * 1.5 - 1}).reduce(function q(a, b){return a + b}));