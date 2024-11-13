const fs = require('fs');
const xmlBuilder = require('xmlbuilder');
const axios = require('axios');

// Custom Reporter Class
class MyCustomReporter {
  constructor(options) {
    // Initialize XML builder
    this.xml = xmlBuilder.create('test-cases');

    // Set the options for output files
    this.outputFiles = {
      business: './output_revised.txt',
      boundary: './output_boundary_revised.txt',
      exception: './output_exception_revised.txt',
      xml: './yaksha-test-cases.xml',
    };

    // Read custom data from a file (similar to what you're doing in Jest)
    this.customData = '';
    try {
      this.customData = fs.readFileSync('../custom.ih', 'utf8');
    } catch (err) {
      console.error('Error reading custom data:', err);
    }

    // Clean up old output files
    for (let key in this.outputFiles) {
      if (fs.existsSync(this.outputFiles[key])) {
        fs.unlinkSync(this.outputFiles[key]);
      }
    }
  }

  // Called when all tests have completed
  async onEnd(result) {
    // Save the XML report if needed
    fs.writeFileSync(this.outputFiles.xml, this.xml.toString({ pretty: true }));

    // Send the results via HTTP POST
    try {
      await axios.post('https://yaksha-prod-sbfn.azurewebsites.net/api/YakshaMFAEnqueue?code=jSTWTxtQ8kZgQ5FC0oLgoSgZG7UoU9Asnmxgp6hLLvYId/GW9ccoLw==', {
        testResults: result,
        customData: this.customData,
      });
    } catch (error) {
      console.error('Error sending results:', error);
    }
  }

  // Called when a test finishes
  onTestEnd(test, result) {
    const { status, title, error } = result;
    const testName = title.trim();
    const fileName = testName.split(' ')[1];
    const resultStatus = status === 'passed' ? 'Passed' : 'Failed';

    // Write result to a text file
    const fileOutput = `${testName}=${status === 'passed'}`;
    fs.appendFileSync('./test.txt', `${fileOutput}\n`);

    // Prepare the XML output for this test case
    this.prepareXmlFile(test, result);

    // Optionally log the result in different categories
    if (fileName === 'business') {
      fs.appendFileSync(this.outputFiles.business, fileOutput + '\n');
    } else if (fileName === 'boundary') {
      fs.appendFileSync(this.outputFiles.boundary, fileOutput + '\n');
    } else if (fileName === 'exception') {
      fs.appendFileSync(this.outputFiles.exception, fileOutput + '\n');
    }
  }

  // Helper function to prepare XML
  prepareXmlFile(test, result) {
    const testCaseType = result.title.trim().split(' ')[1];

    this.xml
      .ele('cases', {
        'xmlns:java': 'http://java.sun.com',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:type': 'java:com.assessment.data.TestCase',
      })
      .ele('test-case-type', testCaseType)
      .up()
      .ele('expected-ouput', true)
      .up()
      .ele('name', this.camelCase(test.title.trim()))
      .up()
      .ele('weight', 2)
      .up()
      .ele('mandatory', true)
      .up()
      .ele('desc', 'na')
      .end();
  }

  // Helper function to convert a string to camelCase
  camelCase(str) {
    return str
      .split(' ')
      .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)))
      .join('');
  }
}

module.exports = MyCustomReporter;
