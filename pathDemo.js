import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename() - the file name itself
console.log("This is the basename:", path.basename(filePath));

// dirname() - the directory name
console.log("This is the dirname:", path.dirname(filePath));

// extname()
console.log("This is the extension name:", path.extname(filePath));

// parse()
console.log("This is parse:", path.parse(filePath));

// file name of this file (pathDemo.js)
const __filename = url.fileURLToPath(import.meta.url);
console.log("es6 file name", __filename);

// directory name of this (pathDemo.js)
const __dirname = path.dirname(__filename);
console.log("es6 file", __dirname)

// join() - join the path of the directory
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() - similar to join()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);

