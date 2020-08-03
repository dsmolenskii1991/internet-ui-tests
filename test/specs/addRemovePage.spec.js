const AddRemovePage = require("..//pageobjects/Pages/AddRemovePage");
var assert = require('chai').assert;
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe("AddRemovePage tests", () => {

    before('Opens AddRemovePage', () => {
        AddRemovePage.open();
    });

    it('Checks if correct header is shown', () => {
        assert.equal(AddRemovePage.pageHeader, "Add/Remove Elements", "Wrong Header");
    });

    it('Checks if Add Element button is visible', () => {
        assert.isTrue(AddRemovePage.isAddElementButtonVisible(), "Add Element button is missing");
    });

    it('Checks whether proper number of Delete buttons appear when clicking Add Button several times', () => {
        AddRemovePage.clickAddElementButton(3);
        assert.equal(AddRemovePage.numberOfVisibleDeleteButtons, 3, "Wrong number of delete buttons");
    });

    it('Checks whether proper number of Delete buttons are shown after clicking Delete button', () => {
        for (let i = 3; i > 0; i--) {
            AddRemovePage.clickDeleteButton(i);
            assert.equal(AddRemovePage.numberOfVisibleDeleteButtons, i - 1, "Wrong number of delete buttons");

        }
    });

})