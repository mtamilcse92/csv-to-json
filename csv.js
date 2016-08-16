var Converter = require("csvtojson").Converter;
var json2csv = require('json2csv');
var fs = require("fs");
var file;
var csvFileName = "./demo.csv";
var csvConverter = new Converter();
var aaa;
var myCars = [{ "first name": "aa", "last name": "bb" }, { "first name": "cc", "last name": "dd" }, { "first name": "first name", "last name": "last name" }, { "first name": "aa", "last name": "bb" }, { "first name": "cc", "last name": "dd" }];
csvConverter.on("end_parsed", function(jsonObj) {
    console.log(jsonObj);
    file = JSON.stringify(jsonObj);
    fs.writeFile('./data.json', file, 'utf-8');

    json2csv({
        data: myCars,
        fields: ['first name', 'last name']
    }, function(err, csv) {
        if (err) console.log(err);
        fs.writeFile('file.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
        });

    });
});
fs.createReadStream(csvFileName).pipe(csvConverter);
aaa = fs.createReadStream(csvFileName).pipe(csvConverter);
