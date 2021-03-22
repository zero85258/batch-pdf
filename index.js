//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");
var listJson = require('./list.json');
console.log(listJson)

// listJson = JSON.parse(jjson)

// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

// if (typeof require !== 'undefined') XLSX = require('xlsx');
// var workbook = XLSX.readFile('test.xlsx');
/* DO SOMETHING WITH workbook HERE */

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

for (myArgs in listJson) {
    inputParameters = myArgs[3].split(",");
    outputParameters = myArgs[4].split(",");

    inputRst = []
    for (inputParameter in inputParameters) {
        pair = inputParameter.split(":");
        inputRst.append({
            name: pair[0],
            type: pair[1],
            chName: "中文名稱"
        })
    }
    
    outputRst = []
    for (outputParameter in outputParameters) {
        pair = outputParameter.split(":");
        outputRst.append({
            name: pair[0],
            type: pair[1],
            chName: "中文名稱",
            comment: "註釋"
        })
    }

    var document = {
        html: html,
        data: {
            fileName: myArgs[0],
            functionName: myArgs[1],
            functionEffect: myArgs[2],
            input: intputRst,
            output: outputRst,
        },
        path: `./output-${ myArgs[0] }.pdf`,
        type: "",
    };

    pdf.create(document, options)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        });
}

