const BasePage = require("../Pages/BasePage");
let Table = require("../Elements/Table");

class TablesPage extends BasePage {
    constructor() {
        super();
        this.Table1 = new Table(this.table1Xpath);
        this.Table2 = new Table(this.table2Xpath);
    };

    open() {
        super.open("tables");
    };

    //Xpath значения для первой таблицы, необходимо для инициализации объекта Table
    get table1Xpath() {
        return "//table[@id = 'table1']";
    };

    //Xpath значения для второй таблицы, необходимо для инициализации объекта Table
    get table2Xpath() {
        return "//table[@id = 'table2']";
    }

    //Метод сортировки таблицы по фамилии
    sortTableByLastName(tableNumber) {
        if (tableNumber == 1) {
            this.Table1.sortTable(1);

        } else if (tableNumber == 2) {
            this.Table2.sortTable(2);

        };
    }

    //Список файмилий из первой таблицы
    get table1lastNamesList() {
        let lastNamesList = [];
        for (let i = 0; i < 4; i++) {
            lastNamesList.push(this.Table1.cellValue(i + 1, 1));

        }
        return lastNamesList;
    };

    //Заголовки таблицы
    get tableHeadersList() {
        return this.Table1.tableHeaders;
    };

    //Получение персоны (сущность в таблице) по индексу
    getPersonByNumber(personNumber) {
        let Person = {};
        Person.surname = this.Table1.cellValue(personNumber, 1);
        Person.firstName = this.Table1.cellValue(personNumber, 2);
        Person.email = this.Table1.cellValue(personNumber, 3);
        Person.due = this.Table1.cellValue(personNumber, 4);
        Person.webSite = this.Table1.cellValue(personNumber, 5);
        return Person;

    }

}

module.exports = new TablesPage();