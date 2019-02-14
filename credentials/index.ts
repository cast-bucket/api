import * as fs from "fs";

let credentials;
if(!fs.existsSync('./private.json')) {
    credentials = fs.readFileSync('./private.template.json');
    // console.log('Unable to find private keys, returning default credentials!')
} else {
    credentials = fs.readFileSync('./private.json')
}

export default credentials;