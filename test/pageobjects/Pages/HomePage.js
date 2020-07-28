const BasePage = require("../Pages/BasePage");


class HomePage extends BasePage {

    open() {
        return super.open("");
    }

    get homePageHeading1() {
        return $('//h1').getText();
    }

    get homePageHeading2() {
        return $('//h2').getText();
    }

    get pagesCount() {
        return $$('//li').length;
    }

    isPagesListDisplayed() {
        return $('//ul').isDisplayed();

    }
}

module.exports = new HomePage();