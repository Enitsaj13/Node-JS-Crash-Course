import os from 'os';

// userInfo() - get the user info of the operating system
console.log(os.userInfo());

// totalmem() - returns the total amount of RAM in bytes
console.log(os.totalmem());

// freemem() - check the free memory
console.log(os.freemem());

// cpus() - provide cpu info (model, speed, times, etc.)
console.log(os.cpus());