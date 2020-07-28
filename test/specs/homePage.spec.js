const HomePage = require("..//pageobjects/Pages/HomePage");
var chai = require('chai');
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe('HomePage tests', () => {

    before('Opens HomePage', () => {
        HomePage.open();
    });

    it('Checks Heading1', () => {
        AllureReporter.addDescription('Heading1 test description');
        chai.assert.equal(HomePage.homePageHeading1, "Welcome to the-internet", "Headings2 are not equal");
    });

    it('Checks Heading2', () => {
        AllureReporter.addDescription('Heading2 test description');
        chai.assert.equal(HomePage.homePageHeading2, "Available Examples", "Headings1 are not equal");
    });

    it('Checks if list of pages is shown properly', () => {
        AllureReporter.addDescription('List of pages description');
        chai.assert.isTrue(HomePage.isPagesListDisplayed(), "Pages list is not displayed");
        chai.assert.equal(HomePage.pagesCount, 44, 'Pages count are not equal');

    });
});