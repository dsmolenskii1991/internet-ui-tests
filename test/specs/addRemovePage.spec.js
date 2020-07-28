const AddRemovePage = require("..//pageobjects/Pages/AddRemovePage");
var chai = require('chai');
const { default: AllureReporter } = require('@wdio/allure-reporter');

describe("AddRemovePage tests", () => {

    before('Opens AddRemovePage', () => {
        AddRemovePage.open();
    });

    it('Checks if correct header is shown', () => {
        chai.assert.equal(AddRemovePage.pageHeader, "Add/Remove Elements", "Wrong Header");
    });

    it('Checks if Add Element button is visible', () => {
        chai.assert.isTrue(AddRemovePage.isAddElementButtonVisible(), "Add Element button is missing");
    });

    it('Checks whether proper number of Delete buttons appear when clicking Add Button several times', () => {
        AddRemovePage.clickAddElementButton(3);
        chai.assert.equal(AddRemovePage.numberOfVisibleDeleteButtons, 3, "Wrong number of delete buttons");
    });

    it('Checks whether proper number of Delete buttons are shown after clicking Delete button', () => {
        for (let i = 3; i > 0; i--) {
            AddRemovePage.clickDeleteButton(i);
            chai.assert.equal(AddRemovePage.numberOfVisibleDeleteButtons, i - 1, "Wrong number of delete buttons");

        }
    });

})