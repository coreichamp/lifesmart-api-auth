var md5 = require("md5");
var timeStamp = `${Date.now()}`.slice(0, 10);

var id = "777";
var userid = "7808744";
var appkey = "CnqTFzIrd8QrM3J0aNTj0A";
var apptoken = "pSGPg7Xqkf7tEpT5Amuj8A";
var usertoken = "ywUkyiR21uvY3atnnl0ZrA";
var lang = "en";

let init_sig = `method:WbAuth,time:${timeStamp},userid:${userid},usertoken:${usertoken},appkey:${appkey},apptoken:${apptoken}`;
let md5Sig = md5(init_sig);
var req_message = `{
    "id": ${id},
    "method": "WbAuth",
    "system": {
        "ver": "1.0",
        "lang": "${lang}",
        "userid": "${userid}",
        "appkey": "${appkey}",
        "time": ${timeStamp},
        "sign": "${md5Sig}"
    } 
}`;

console.log(`timeStamp ${timeStamp}`);
console.log(`init Sig: ${init_sig}`);
console.log(`MD5 Sig: ${md5Sig}`);
console.log(`Request Message: ${req_message}`);
