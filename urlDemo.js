import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

// format() - format the URL object
console.log("Format:", url.format(urlObj));

// import.meta./url - file URL
console.log(import.meta.url);

// fileURLToPath() - get the path of this file
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

// new URLSearchParams() - returns the search params
const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get('q'));

// adding new params search
params.append('limit', '5');

// delete the params
params.delete('limit');

console.log(params);
