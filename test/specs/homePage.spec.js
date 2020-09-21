const HomePage = require("..//pageobjects/Pages/HomePage");
var assert = require('chai').assert;
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe('HomePage tests', () => {

    //Открываем страницу
    before('Opens HomePage', () => {
        HomePage.open();
    });

    //Проверяем 1ый заголовок
    it('Checks Heading1', () => {
        AllureReporter.addDescription('Heading1 test description');
        assert.equal(HomePage.homePageHeading1, "Welcome to the-internet", "Headings2 are not equal");
    });

    //Проверяем 2ой заголовок
    it('Checks Heading2', () => {
        AllureReporter.addDescription('Heading2 test description');
        assert.equal(HomePage.homePageHeading2, "Available Examples", "Headings1 are not equal");
    });

    //Проверяем, что список страниц отображается и что их количество корректно
    it('Checks if list of pages is shown properly', () => {
        AllureReporter.addDescription('List of pages description');
        assert.isTrue(HomePage.isPagesListDisplayed(), "Pages list is not displayed");
        assert.equal(HomePage.pagesCount, 44, 'Pages count are not equal');

    });
});