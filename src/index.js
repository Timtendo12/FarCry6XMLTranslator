/*
----------------------------------------------------
Far Cry XML Translator made by Timtendo12!
----------------------------------------------------
 */
const translate = require("translate");
const config = require("./files/config.json");
const fs = require("fs");
//const readline = require('readline');
const file = ("C:/Users/Timsl/WebstormProjects/farcrytranslator/src/files/xml-to-txt/oasisstrings.oasis.bin.converted.txt");
//const Testfile = ("C:/Users/Timsl/WebstormProjects/farcrytranslator/src/files/xml-to-txt/test.txt")
const { readFile } = require("fs/promises");
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream(`${file}`);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    let LineNR = 1;
    for await (const line of rl) {

        // Each line will be successively available here as `line`.
        console.log(`${LineNR}: ${line}`);
        LineNR++;
    }
}

processLineByLine();


translate.engine = "translate";
translate.key = config.API_key;










