module.exports = class Table {

    constructor(tableXpath) {
        this.tableXpath = tableXpath;
    };

    get tableHeaders() {
        let tableHeaders = [];
        let tableHeaderElements = $$(`${this.tableXpath}/thead/tr/th`);
        for (let i = 0; i < tableHeaderElements.length; i++) {
            tableHeaders.push(tableHeaderElements[i].getText());
        }
        return tableHeaders;
    }

    getCellValue(x, y) {
        return $(`${this.tableXpath}/tbody/tr[${x}]/td[${y}]`).getText();

    };

    sortTable(headerToSort) {
        return $(`${this.tableXpath}/thead/tr/th[${headerToSort}]`).click();
    }



}