const BasePage = require("../Pages/BasePage");

class AddRemovePage extends BasePage {

    open() {

        return super.open("add_remove_elements/");
    };

    isAddElementButtonVisible() {
        return $("//button[@onclick = 'addElement()']").isDisplayed();
    };

    clickAddElementButton(numberOfClicks) {
        for (let i = 0; i < numberOfClicks; i++) {
            $("//button[@onclick = 'addElement()']").click();
        }

    };

    clickDeleteButton(buttonIndex) {
        $(`//button[@class= 'added-manually'][${buttonIndex}]`).click();
    };

    get numberOfVisibleDeleteButtons() {
        return $$("//div[@id = 'elements']/button").length;
    };


}

module.exports = new AddRemovePage();