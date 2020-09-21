const TablesPage = require('../pageobjects/Pages/TablesPage');
var assert = require('chai').assert;
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe('TablesPage tests', () => {

    //Открываем страницы
    before('Opens TablesPage', () => {
        TablesPage.open();
    });

    //Проверяем заголовки столбцов в таблице
    it('Checks table headers', () => {
        let expectedHeaders = ['Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action'];
        assert.deepEqual(TablesPage.tableHeadersList, expectedHeaders, "Headers are not equal");
    });

    //Сверяем запись в первой таблице
    it('Checks person 1 from Table 1 data', () => {
        assert.deepEqual(TablesPage.getPersonByNumber(1).surname, 'Smith');
        assert.deepEqual(TablesPage.getPersonByNumber(1).firstName, 'John');
        assert.deepEqual(TablesPage.getPersonByNumber(1).email, 'jsmith@gmail.com');
        assert.deepEqual(TablesPage.getPersonByNumber(1).due, '$50.00');
        assert.deepEqual(TablesPage.getPersonByNumber(1).webSite, 'http://www.jsmith.com');
    });

    //Проверяем сортировку по умолчанию
    it('Checks last names in first table default sorting', () => {
        let expectedLastNamesList = ['Smith', 'Bach', 'Doe', 'Conway', ];
        assert.deepEqual(TablesPage.table1lastNamesList, expectedLastNamesList, "Last names are not equal");
    });

    //Проверяем корректность сортировки
    it('Sorts first table by last name and checks sorting', () => {
        let expectedLastNamesList1 = ['Bach', 'Conway', 'Doe', 'Smith'];
        TablesPage.sortTableByLastName(1);
        assert.deepEqual(TablesPage.table1lastNamesList, expectedLastNamesList1, "Last names are not equal after sorting");
    });




});