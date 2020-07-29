const BasePage = require("../Pages/BasePage");
let Table = require("../Elements/Table");

class TablesPage extends BasePage {
    constructor() {
        super();
        this.Table1 = new Table("//table[@id = 'table1']");
        this.Table2 = new Table("//table[@id = 'table2']");
    };

    open() {
        return super.open("tables");
    };

    sortTableByLastName(tableNumber) {
        if (tableNumber == 1) {
            this.Table1.sortTable(1);

        } else if (tableNumber == 2) {
            this.Table2.sortTable(1);

        };
    }

    get table1lastNamesList() {
        let lastNamesList = [];
        for (let i = 0; i < 4; i++) {
            lastNamesList.push(this.Table1.getCellValue(i + 1, 1));

        }
        return lastNamesList;
    };

    get tableHeadersList() {
        return this.Table1.tableHeaders;
    };

}

module.exports = new TablesPage();