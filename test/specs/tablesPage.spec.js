const TablesPage = require('../pageobjects/Pages/TablesPage');
var chai = require('chai');
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe('TablesPage tests', () => {

    before('Opens TablesPage', () => {
        TablesPage.open();
    });

    it('Checks table headers', () => {
        let expectedHeaders = ['Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action'];
        chai.assert.deepEqual(TablesPage.tableHeadersList, expectedHeaders, "Headers are not equal");
    });

    it('Checks last names in first table default sorting', () => {
        let expectedLastNamesList = ['Smith', 'Bach', 'Doe', 'Conway', ];
        chai.assert.deepEqual(TablesPage.table1lastNamesList, expectedLastNamesList, "Last names are not equal");
    });

    it('Sorts first table by last name and checks sorting', () => {
        let expectedLastNamesList1 = ['Bach', 'Conway', 'Doe', 'Smith'];
        TablesPage.sortTableByLastName(1);
        chai.assert.deepEqual(TablesPage.table1lastNamesList, expectedLastNamesList1, "Last names are not equal after sorting");
    });


});