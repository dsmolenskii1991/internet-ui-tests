const testsConfig = require('..//Config/testsConfig');

module.exports = class BasePage {

    open(path) {
        if (path === "") return browser.url(`${testsConfig.baseUrl}`);
        else return browser.url(`${testsConfig.baseUrl}${path}`);
    }

    get pageHeader() {
        return $('//h3').getText();
    }

}