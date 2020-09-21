const AddRemovePage = require("..//pageobjects/Pages/AddRemovePage");
var assert = require('chai').assert;
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe("AddRemovePage tests", () => {

    //Открываем страницу
    before('Opens AddRemovePage', () => {
        AddRemovePage.open();
    });

    //Проверяем заголовок страницы
    it('Checks if correct header is shown', () => {
        assert.equal(AddRemovePage.pageHeader, "Add/Remove Elements", "Wrong Header");
    });

    //Проверяем, что кнопка Add Element отображается
    it('Checks if Add Element button is visible', () => {
        assert.isTrue(AddRemovePage.isAddElementButtonVisible(), "Add Element button is missing");
    });

    //Проверяем, что при клике на AddElement на страницу добавляется соответствующее количество Remove кнопок
    it('Checks whether proper number of Delete buttons appear when clicking Add Button several times', () => {
        AddRemovePage.clickAddElementButton(3);
        assert.equal(AddRemovePage.numberOfVisibleDeleteButtons, 3, "Wrong number of delete buttons");
    });

    //Проверяем, что при клике на Delete их количество уменьшается
    it('Checks whether proper number of Delete buttons are shown after clicking Delete button', () => {
        for (let i = 3; i > 0; i--) {
            AddRemovePage.clickDeleteButton(i);
            assert.equal(AddRemovePage.numberOfVisibleDeleteButtons, i - 1, "Wrong number of delete buttons");

        }
    });

})