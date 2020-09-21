module.exports = class Table {

    constructor(tableXpath) {
        this.tableXpath = tableXpath;
    };

    //Массив заголовков столбцов в таблице
    get tableHeaders() {
        let tableHeaders = [];
        let tableHeaderElements = $$(`${this.tableXpath}/thead/tr/th`);
        for (let i = 0; i < tableHeaderElements.length; i++) {
            tableHeaders.push(tableHeaderElements[i].getText());
        }
        return tableHeaders;
    }

    //Значение ячейки таблицы по координатам
    cellValue(x, y) {
        return $(`${this.tableXpath}/tbody/tr[${x}]/td[${y}]`).getText();

    };

    //Сортировка таблицы по наименованию столбца
    sortTable(headerToSort) {
        $(`${this.tableXpath}/thead/tr/th[${headerToSort}]`).click();
    }


}