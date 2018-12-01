const input = require('./input.js');

let total = 0;
let i = 0;
const seen = new Set([0]);

while (input.length) {
    total += input[i++];
    if (i >= input.length) i = 0;
    if (seen.has(total)) {
        console.log(total);
        return;
    } else {
        seen.add(total);
    }
}