//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

if (typeof require !== 'undefined') XLSX = require('xlsx');
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




inputParameters = myArgs[3].split(",");
outputParameters = myArgs[4].split(",");

for (inputParameter in inputParameters) {
    pair = inputParameter.split(":");
    name = pair[0]
    type = pair[1]
    var document = {
        html: html,
        data: {
            // users: users,
            fileName: myArgs[0],
            functionName: myArgs[1],
            functionEffect: myArgs[2],
            input: [{
                name: "gsgsgsg",
                type: "gsgsgsg",
                chName: "中文名稱",
            }],
            output: [{
                name: "gsgsgsg",
                type: "gsgsgsg",
                chName: "gsgsgsg",
                comment: "fsdfsdfsdfsdf"
            }],
        },
        path: `./output--${ myArgs[0] }.pdf`,
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

// var users = [{
//         name: "Shyam",
//         age: "26",
//     },
//     {
//         name: "Navjot",
//         age: "26",
//     },
//     {
//         name: "Vitthal",
//         age: "26",
//     },
// ];