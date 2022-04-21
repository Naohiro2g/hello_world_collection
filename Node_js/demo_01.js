// CommonJS version

'use strict';

var os = require('os');
console.log("Host name: " + os.hostname());


var memory = {};
memory.free = os.freemem() / 1000000000;
memory.total = os.totalmem() / 1000000000;
memory.freePercent = memory.free / memory.total * 100;
console.log("Free Mem:" + memory.free.toFixed(2) + "GB, Total Mem:" + memory.total.toFixed(2) + "GB, Free(%):" + memory.freePercent.toFixed(2) + "%");


require('date-utils');
var dtNow = new Date();
var dateDisp = dtNow.toFormat("YYYY-MM-DD HH24:MI:SS");
console.log(dateDisp);
