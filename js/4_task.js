let url = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json';

// Асинхронная функция с оператором await для ожидания выполнения асинхронных операций, таких как запросы fetch
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        let city = data.address.city;
        let street = data.address.street;
        let house = data.address.house;

        console.log(`Город: ${city} Улица: ${street} Дом: ${house}`);

        let lastName = data.person.lastName;
        let firstName = data.person.firstName;
        let itemCount = data.productsOrder.count;
        console.log(`${lastName} ${firstName} купил ${itemCount} штук товаров`);
    } catch (error) {
        console.error('Ошибка при выполнении fetch:', error.message);
    }
}