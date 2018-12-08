const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
/*
//compressing a file to gzip
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gz');

readStream.pipe(gzip).pipe(writeStream);
*/

//Uncompressing a file gzip with gunzip
const readStream =fs.createReadStream('./example2.txt.gz');
const writeStream =fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);