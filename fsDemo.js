import fs from 'fs/promises';

// readFile() - callback
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// readFileSync() - Synchronous version
const data = fs.readFileSync('./test.txt', 'utf8');
console.log(data);

readFile() - Promise.then()
fs.readFile('./test.txt', 'utf8')
    .then((data) => console.log(data))
    .catch(() => console.log(err));

// readFile() - async/await (read the file)
async function readFile() {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};


// writeFile() - overwrite the file
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am pogi Jastine!');
        console.log('File written to...');
    } catch (error) {
        console.log(error);
    }
};

// appendFile() - add additional to the file
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended to...');
    } catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();



