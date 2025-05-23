# Continuous Integration Script for Allure Reporter

Script to automate use of Allure Reporter on continuous integration environments.


## Supported features

* Batch PDF generation of test reports 
* Automated upload of test results to JAMA contour (`Not available yet`)


## Setup

### Prerequisites

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)

### Installation

* Clone this repository
* Install NPM dependencies

```bash
> git clone https://github.com/systelab/cpp-allure-reporter-ci
> npm install
```

## Usage

### Script Execution

Prior to the execution of this script, a JSON configuration file needs to be created and the following environment variables need to be set:

* *ALLURE_REPORTER_CI_WORKSPACE*: Absolute path of the workspace where the Allure test reports to be processed are stored.
* *ALLURE_REPORTER_CI_CONFIG_FILE*: Relative path (regards to the workspace path) where the JSON configuration file is stored.

Finally, this script is executed by running the following command:

```bash
npm run report
```

### Configuration File

The Allure test reports to be processed by this script as well as the actions to be performed with them are defined using a JSON configuration file like the following one:

```json
{
	"website": "https://systelab.github.io/allure-reporter/",
	"projects": [
		{
			"name": "FirstProject",
			"inputFolderPath": "project1/input",
			"outputFolderPath": "project1/output",
			"saveAsPDF": true,
			"uploadToJAMA": false
		},
		{
			"name": "SecondProject",
			"inputFolderPath": "project2/input",
			"outputFolderPath": "project2/output",
			"saveAsPDF": true,
			"uploadToJAMA": true
		}
	],
    "jamaConfig": {
        "username": "",
        "password": "",
        "server": "https://<server>/rest/v1"
    } 
}
```

> Provided paths should be relative to the workspace folder defined using *ALLURE_REPORTER_CI_WORKSPACE* environment variable.

See [test/configuration](https://github.com/systelab/allure-reporter-ci/tree/master/test/configuration) folder for more complete examples of configuration files.

### AllureReporter tool website

The URL where the AllureReporter tool is deployed can be defined by means of the `website` top-level attribute of the JSON configuration file.

### Input Allure reports

This script can be used with any [Allure](http://allure.qatools.ru/) report that can be read by the AllureReporter tool. See [allure-reporter](https://github.com/systelab/allure-reporter) repository for details. 


### Batch PDF generation of test reports

This feature is enabled by setting to true the `saveAsPDF` attribute of the projects defined into the configuration file. Then, the script will load all the Allure reports found under the `inputFolderPath` folder and generate a PDF file for each one. These PDFs will be left on the folder defined by the `outputFolderPath` attribute.


### Automated upload of test results to JAMA contour

This feature is enabled by setting to true the `uploadToJAMA` attribute of the projects defined into the configuration file. Then, the script will load all the Allure reports found under the `inputFolderPath` folder and updated the related test cases in JAMA. The JAMA credentials should be set at `jamaConfig` object.
