const BasePage = require("../Pages/BasePage");


class HomePage extends BasePage {

    open() {
            super.open("");
        }
        //Первый заголовок
    get homePageHeading1() {
        return $('//h1').getText();
    }

    //Второй заголовок
    get homePageHeading2() {
            return $('//h2').getText();
        }
        //Количество страниц
    get pagesCount() {
        return $$('//li').length;
    }

    //Метод проверки отображения списка страниц на главной странице
    isPagesListDisplayed() {
        return $('//ul').isDisplayed();

    }
}

module.exports = new HomePage();