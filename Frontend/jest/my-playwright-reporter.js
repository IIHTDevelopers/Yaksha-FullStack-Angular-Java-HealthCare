const { Reporter } = require('@playwright/test/reporter');
const fs = require('fs');
const xmlBuilder = require('xmlbuilder');
const XMLHttpRequest = require('xhr2');

class MyPlaywrightReporter {
    onBegin(config, suite) {
        console.log('Running Playwright tests...');
        this.xml = xmlBuilder.create('test-cases');
        this.outputFiles = {
            business: './output_revised.txt',
            boundary: './output_boundary_revised.txt',
            exception: './output_exception_revised.txt',
            xml: './yaksha-test-cases.xml',
        };

        for (let key in this.outputFiles) {
            if (fs.existsSync(this.outputFiles[key])) {
                fs.unlinkSync(this.outputFiles[key]);
                console.log(`${this.outputFiles[key]} deleted`);
            }
        }

        const filePath = "../../custom.ih";
        if (fs.existsSync(filePath)) {
            console.log("File exists, proceeding to read custom data...");
            try {
                const data = fs.readFileSync(filePath, "utf8");
                this.customData = data;
                console.log("Custom data read successfully");
            } catch (err) {
                console.error("Error reading custom data:", err);
            }
        } else {
            console.error(`File not found at ${filePath}`);
        }
    }

    onTestEnd(test, result) {
        console.log(`Test ${test.title} finished with status ${result.status}`);

        // Determine the correct output file based on describe block name (suite)
        const suiteName = test.parent ? test.parent.title.toLowerCase() : 'exception'; // fallback to 'exception' if no parent
        const outputFileKey = suiteName in this.outputFiles ? suiteName : 'exception';

        writeTextFiles(test, result, this.outputFiles, this.customData, (file, data) => {
            fs.appendFileSync(file, data);
            console.log(`Data appended to file: ${file}`);
        }, outputFileKey);

        prepareXmlFile(this.xml, test, result);
        sendApiRequest(result, this.customData);
    }

    onEnd(result) {
        console.log('Finished the Playwright run.');
        fs.writeFileSync(this.outputFiles.xml, this.xml.toString({ pretty: true }));
        console.log(`XML file created at ${this.outputFiles.xml}`);
    }
}

const writeTextFiles = (test, result, outputFiles, customData, cb, outputFileKey) => {
    console.log('Inside writeTextFiles for:', test.title);
    let testResults = {
        testCaseResults: {},
        customData: customData,
    };

    let resultStatus = result.status === 'passed' ? 'Passed' : 'Failed';
    let resultScore = result.status === 'passed' ? 1 : 0;

    let testCaseResultDto = {
        methodName: camelCase(test.title),
        methodType: test.type,
        actualScore: 1,
        earnedScore: resultScore,
        status: resultStatus,
        isMandatory: true,
        erroMessage: '',
    };

    let GUID = 'd907aa7b-3b6d-4940-8d09-28329ccbc070';
    testResults.testCaseResults[GUID] = testCaseResultDto;

    let finalResult = JSON.stringify(testResults);

    let fileOutput = `${camelCase(test.title)}=${result.status === 'passed'}`;
    fs.appendFileSync('./test.txt', finalResult);

    if (!!outputFiles[outputFileKey]) {
        cb(outputFiles[outputFileKey], `${fileOutput}\n`);
    } else {
        console.error(`File type ${outputFileKey} not found in outputFiles`);
    }

    var xhr = new XMLHttpRequest();
    var url = "https://yaksha-prod-sbfn.azurewebsites.net/api/YakshaMFAEnqueue?code=jSTWTxtQ8kZgQ5FC0oLgoSgZG7UoU9Asnmxgp6hLLvYId/GW9ccoLw==";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        fs.appendFileSync("./test.txt", "\nRESPONSE" + JSON.stringify(xhr.responseText));
    };
    xhr.send(finalResult);
};

const camelCase = str => {
    if (!str) return '';
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
};

const prepareXmlFile = (xml, test, result) => {
    console.log('Inside prepareXmlFile for:', test.title);
    xml.ele('cases', {
        'xmlns:java': 'http://java.sun.com',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:type': 'java:com.assessment.data.TestCase',
    })
        .ele('test-case-type', test.type || 'unknown')
        .up()
        .ele('expected-output', true)
        .up()
        .ele('name', camelCase(test.title))
        .up()
        .ele('weight', 2)
        .up()
        .ele('mandatory', true)
        .up()
        .ele('desc', 'na')
        .end();

    console.log('XML entry created for:', test.title);
};

const sendApiRequest = (result, customData) => {
    // console.log('Sending API request for result:', result);
    let testResults = {
        testCaseResults: {},
        customData: customData,
    };

    let resultStatus = result.status === 'passed' ? 'Passed' : 'Failed';
    let resultScore = result.status === 'passed' ? 1 : 0;

    let testCaseResultDto = {
        methodName: camelCase(result.title),
        methodType: result.type || 'unknown',
        actualScore: 1,
        earnedScore: resultScore,
        status: resultStatus,
        isMandatory: true,
        erroMessage: '',
    };

    let GUID = 'd907aa7b-3b6d-4940-8d09-28329ccbc070';
    testResults.testCaseResults[GUID] = testCaseResultDto;

    let finalResult = JSON.stringify(testResults);

    var xhr = new XMLHttpRequest();
    var url = "https://yaksha-prod-sbfn.azurewebsites.net/api/YakshaMFAEnqueue?code=jSTWTxtQ8kZgQ5FC0oLgoSgZG7UoU9Asnmxgp6hLLvYId/GW9ccoLw==";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log('API response:', xhr.responseText);
        }
    };
    xhr.send(finalResult);
};

module.exports = MyPlaywrightReporter;
