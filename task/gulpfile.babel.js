import fs from 'fs';

function writeFile(fileName, data, encoding, cb) {
  fs.writeFile(fileName, data, encoding, cb);
}

writeFile('message.txt', 'Hello Node.js', 'utf8', function asd(ww) {
  console.log('yee', ww);
});
