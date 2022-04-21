// ES Modules version

'use strict';

import { hostname } from 'os';
console.log("Host name: " + hostname())

import { freemem, totalmem } from 'os';
var memory = {};
memory.free = freemem() / 1000000000;
memory.total = totalmem() / 1000000000;
memory.freePercent = memory.free / memory.total * 100;
console.log("Free Mem:" + memory.free.toFixed(1) + "GB, Total Mem:" + memory.total.toFixed(1) + "GB, Free(%):" + memory.freePercent.toFixed(1) + "%");


import 'date-utils';

var dtNow = new Date();
var dateDisp = dtNow.toFormat("YYYY-MM-DD HH24:MI:SS");
console.log(dateDisp);

console.log("Current working directory is: " + process.cwd());
