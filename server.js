var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('demo.csv');
csv.write([
	["a1","b1"],
	["b2","c2"],
	["c2","d2"]
	],{headers:true})
.pipe(ws);


// read the csv file
fs.createReadStream('latitude.csv').pipe(csv())
.on('data',function (data) {
	console.log(data);
})
.on('end',function (data) {
	console.log(data);
})