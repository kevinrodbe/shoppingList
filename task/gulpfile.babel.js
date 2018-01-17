//import Promise from 'bluebird'
import request from 'request'
import rp from 'request-promise'
// const fs = Promise.promisifyAll(require('fs'))
import fs from 'fs'

const uri = 'https://oim.mapfre.com.pe/oim_webproc/api/descriptor'

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  //var req2 = request(url).pipe(file)
  var req2 = rp(url)
    .then(resp => resp)
    .then()
};

download(uri, 'asd.txt')

// download
// read
// render tpl
// write

function readFile(file, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject({err})
      } else {
        resolve({data})
      }
    })
  })
}

function writeFile(fileName, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, 'utf8', err => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

writeFile('message.txt', 'Hello Node.js').then(function() {console.log('mx')})
