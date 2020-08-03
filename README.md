# Вводная
1. Небольшой набор UI тестов для демо
2. В качестве тестируемого объекта использовался http://the-internet.herokuapp.com/
3. Фреймворк - WebdriverIO https://webdriver.io/
4. Для отчётов использовался Allure Reporter https://docs.qameta.io/allure/

# Установка и запуск
1. Клонируем репозиторий
2. npm install
3. Запускаем тесты npx wdio wdio.conf.js
4. Генерируем отчёт allure generate --clean && allure open
