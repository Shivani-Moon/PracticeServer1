const http = require('http')
const settings = require('./config/settings')
const os = require('os')

const PORT = settings.port || 10500

const app = http.createServer((req,res)=>{
    // res.writeHead(200,{'content-Type':'plain/Text'})
    res.end('Hello World')
})

console.log(os.platform())
console.log(os.homedir())

const path = require('path')
const fs = require('fs')

console.log('-----------------------')
fs.writeFileSync('temp.txt','This is first line')

let dt = fs.readFileSync('temp.txt', 'utf-8')

console.log(dt)
console.log('---------new data added----------')
fs.appendFileSync('temp.txt','\n This is second line')

dt = fs.readFileSync('temp.txt', 'utf-8')

console.log(dt)

app.listen(PORT, ()=>{
    console.log("Server Started")
    console.log(`http://localhost:5000`)
})


// Directory Path
const dirPath = path.join(__dirname, 'myFiles');
const filePath = path.join(dirPath, 'example.txt');

//1. Create Directory

fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created.');
})



