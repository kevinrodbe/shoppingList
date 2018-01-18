//import Promise from 'bluebird'
import request from 'request'
import rp from 'request-promise'
// const fs = Promise.promisifyAll(require('fs'))
import fs from 'fs'
import mustache from 'mustache'

const uri = 'https://oim.mapfre.com.pe/oim_webproc/api/descriptor'
const tplServices = './task/template.service.ts'
let asd

function download(url) {
  // var file = fs.createWriteStream(dest);
  // var req2 = request(url).pipe(file)
  rp(url)
    .then((jsonDescriptor) => {
      asd = jsonDescriptor;
      return readFile(tplServices)
    })
    .then(generateFileFromTpl)
    .then(writeServiceTs)
};

download(uri)

// download
// read
// render tpl
// write

function generateFileFromTpl(tpl) {
  return new Promise((resolve) => {
    resolve(mustache.render(tpl.data, asd))
  })
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      err ? reject(new Error({err})) : resolve({data})
    })
  })
}

function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, 'utf8', err => {
      err ? reject(new Error(err)) : resolve(true)
    })
  })
}

function writeServiceTs(data) {
  writeFile('myService.ts', data)
}
