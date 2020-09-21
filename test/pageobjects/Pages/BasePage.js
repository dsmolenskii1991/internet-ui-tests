const testsConfig = require('..//Config/testsConfig');

module.exports = class BasePage {

    constructor() {

    };

    /*Метод открытия страницы по пути, внутри задаются таймауты браузера: 
    5000мс на имплицитное ожидание элемента, 
    10000мс на открытие страницы*/
    open(path) {
        browser.setTimeout({ 'implicit': 5000, 'pageLoad': 10000 });
        if (path === "") return browser.url(`${testsConfig.baseUrl}`);
        else return browser.url(`${testsConfig.baseUrl}${path}`);
    }

    //Метод получения заголовка страницы
    get pageHeader() {
        return $('//h3').getText();
    }

}