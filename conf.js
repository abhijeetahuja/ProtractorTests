var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	framework: 'jasmine2',
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
	'tests/*-spec.js'],

	//for running specific test suites
	suites:{
		smoke:'tests/demo-with-*.js',
		full:'tests/*.js'
	},

	capabilities:{
		// browserName: 'phantomjs', 'phantomjs.binary.path': require('phantomjs').path,
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 3},

	//multiCapabilities: [
	//	{browserName: 'firefox',
	//	shardTestFiles: true,
	//	maxInstances: 2},
	//	{browserName: 'chrome',
	//	shardTestFiles: true,
	//	maxInstances: 3},
	//	{browserName: 'phantomjs', 'phantomjs.binary.path': require('phantomjs').path,
	//	shardTestFiles: true,
	//	maxInstances: 3},
	//],
	onPrepare: () => {
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
			savePath: 'jasmine2-html-reporter-results/screenshots'})
		);
	}
};