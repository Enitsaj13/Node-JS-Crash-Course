// const { generateRandomNumber, celciusToFahrenheit } = require('./utils') // module import

import { getPosts, getPostsLength } from './postController.js';

import { generateRandomNumber, celciusToFahrenheit } from './utils.js'

console.log(getPosts());

console.log(`Posts Length: ${getPostsLength()}`)

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`); 