// const fs = require('fs');


// // Reading the file

// const data = fs.readFileSync('file.txt');


// // // writing the file

// // fs.writeFile('file.txt', "Hello World !!!!!>>>>", 'utf8', (err) => {
// //     console.log("File modified");
// // });


// // //Appending to the file

// // fs.appendFile('file.txt', "class is going on", 'utf8', (err) => {
// //     console.log("File appended successfully");
// // });


// // // Directory forming 

// // fs.mkdir('dir1', (err) => {
// //     if(err) {
// //         console.log(err);
// //     }
// //     console.log("Directory formed");
// // });

// // //remove directory
// // fs.rmdir('dir1', (err) => {
// //     if(err) {
// //         console.log(err);
// //     }
// //     console.log("Directory removed");
// // });

// //rename file
// // fs.rename('file.txt', 'file1.txt', (err)={
// //     if(err) {
// //         console.log(err);
// //     }
// //     // console.log("File renamed");
// // });

// const p = "/home/hyperion/Berserk/NodeJs/file.txt"

// const path = require('path');

// const dirname = path.dirname(p);

// const extension = path.extname(p);

// console.log("dir name: "+dirname);
// console.log("ext name: "+extension);

// //rename file
// fs.rename('file1.txt', 'file2.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File renamed");
// });

// //copy file

// const source = "file.txt";
// const destination = "file1.txt";

// fs.copyFile(source, destination, (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File copied");
// });

// //delete file

// fs.unlink('file1.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File deleted");
// });


// Making a server

const {read} = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write("<html><head><title>NodeJs</title></head><body>");
    if(req.url === '/') {
        res.write("<h1>Hello World</h1>");
    } else if(req.url === '/login') {
        res.write("<h1>Hello login</h1>");
    }
    res.write("<p>Welcome to NodeJs</p></body></html>");
    res.end();
});

const port = 3001;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening at http://${host}:${port}`);
});