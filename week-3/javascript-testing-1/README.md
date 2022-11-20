Steps
Run npm init to initialise your application, and press Enter for all the questions
this will also craete a package.json file
To install jest; npm install --save-dev jest
this will create the node_modules folder and the package-lock.json file.
Create 2 files, index.js, and index.test.js
Create a function sum in index.js and export it using, module.exports = sum;
Import the function sum in the test file (index.test.js) using const sum = require('./index')
Change the test script in package.json to "test" : "jest --watchAll"
and run the test cases using npm run test
to run a single test file, npm run test <path-to-the-test-file>