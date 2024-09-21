import crypto from 'crypto';

// createHash() - hash the text using sha256
// const hash = crypto.createHash('sha256');
// hash.update('password1234'); //update the hasg with the string
// console.log(hash.digest('hex')); // outputs the hash as a hexadecimal string

// randomBytes() - generating 16 random bytes string
// crypto.randomBytes(16, (err, buf) => {
//     if (err) throw err;
//     console.log(buf.toString('hex'));
// });

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// encrypt the text
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log("This is encrypted text:", encrypted);

// decrypt the text
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log("This is decrypted text:", decrypted);