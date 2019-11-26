'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

const exec = require('child_process').exec;
const packageInfo = require('../package.json');

const user = packageInfo.author.name;
const name = packageInfo.name;
const version = packageInfo.version || 'latest';

if (user && name) {
    exec(`docker run --name ${name} -p 8080:80 -d ${user}/${name}:${version}`,
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        }
    );
} else {
    throw new Error('Cannot read fields "name" and "author.name" from package.json');
}
