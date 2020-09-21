const BasePage = require("../Pages/BasePage");

class AddRemovePage extends BasePage {

    open() {

        super.open("add_remove_elements/");
    };

    //Метод проверки отображения кнопки AddElement
    isAddElementButtonVisible() {
        return $("//button[@onclick = 'addElement()']").isDisplayed();
    };

    //Нажатие кнопки AddElement с параметром = кол-во раз нажатия
    clickAddElementButton(numberOfClicks) {
        for (let i = 0; i < numberOfClicks; i++) {
            $("//button[@onclick = 'addElement()']").click();
        }

    };

    //Нажатие кнопки Delete с параметром = кол-во раз нажатия   
    clickDeleteButton(buttonIndex) {
        $(`//button[@class= 'added-manually'][${buttonIndex}]`).click();
    };

    //Количество отображаемых кнопок Delete
    get numberOfVisibleDeleteButtons() {
        return $$("//div[@id = 'elements']/button").length;
    };


}

module.exports = new AddRemovePage();