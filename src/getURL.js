var md5 = require("md5");
var timeStamp = `${Date.now()}`.slice(0, 10);

var id = "777";
var appkey = "CnqTFzIrd8QrM3J0aNTj0A";
var auth_callback = "https://www.google.co.th/";
var apptoken = "pSGPg7Xqkf7tEpT5Amuj8A";
var lang = "en";

let init_sig = `appkey=${appkey}&auth_callback=${auth_callback}&time=${timeStamp}&apptoken=${apptoken}`;
let md5Sig = md5(init_sig);
var url = `https://api.us.ilifesmart.com/app/auth.authorize?id=${id}&appkey=${appkey}&time=${timeStamp}&auth_callback=${auth_callback}&sign=${md5Sig}&lang=${lang}`;

console.log(`timeStamp ${timeStamp}`);
console.log(`init Sig: ${init_sig}`);
console.log(`MD5 Sig: ${md5Sig}`);
console.log(`URL: ${url}`);
