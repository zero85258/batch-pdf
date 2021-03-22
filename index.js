//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

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


var users = [{
        name: "Shyam",
        age: "26",
    },
    {
        name: "Navjot",
        age: "26",
    },
    {
        name: "Vitthal",
        age: "26",
    },
];
var document = {
    html: html,
    data: {
        users: users,
        fileName:"nnnnn",
        functionName: "gggg",
        functionEffect: "fffffff",
        input : [{
            name: "gsgsgsg",
            type: "gsgsgsg",
            chName: "gsgsgsg",
        }],
        output : [{
            name: "gsgsgsg",
            type: "gsgsgsg",
            chName: "gsgsgsg",
            comment: "fsdfsdfsdfsdf"
        }],
    },
    path: "./output.pdf",
    type: "",
};

pdf
    .create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });

