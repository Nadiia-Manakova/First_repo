// 03.09.2023 Методы, callback, объекты

/*
 * Напиши скрипт, який, для об'єкта user, послідовно:
 * додає поле mood зі значенням 'happy'
 * замінює значення hobby на 'skydiving'
 * замінює значення premium на false
 * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

//const user = {
// name: 'John',
//age: 20,
//hobby: 'tenis',
//premium: true,
//}

//user.mood = 'happy';
//user['hobby'] = 'skydiving';
//user.premium = false;

// const arr = Object.keys(user);
// for (const item of arr) {
//   console.log(`${item}: ${user[item]}`)
// }

/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

// const salaries = {
//        Mango: 100,
//        Poly: 160,
//       Ajax: 1470,
// }

// let totalSalary = 0;
// // for (const key in salaries) {
// //   if (salaries.hasOwnProperty(key)) {
// //     totalSalary += salaries[key]
// //   }

// //   console.log(totalSalary);
// // }

// const salary = Object.values(salaries)

// for (let value of salary) {
// totalSalary += value
// }

// console.log(totalSalary);


// Напишіть деструктуруюче присвоєння, яке:

// значення властивості name додати змінній name.
// значення властивості years додати змінній age.
// властивість isAdmin присвоює змінну isAdmin (false, якщо немає такої властивості)

// let user = {
//   name: "John",
//   years: 30,
// };

// const {
//   name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);

// Створіть функцію topSalary (salaries), яка повертає ім'я працівника з найвищою зарплатою.
//Якщо об'єкт salaries порожній, потрібно повернути null.
//Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них.
//P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   const array = Object.entries(salaries)
//   if (!array.length) {
//     return null;
//   }
//   let biggestSalary = array[0][1];
//   for (const [salary] of array) {
//     if (salary[1] > biggestSalary[1]) {
//       biggestSalary = salary;
//   }
//   }
//   return  biggestSalary[1]
// }

// console.log(topSalary(salaries));

//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.

// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(1)); // false
// console.log(isPlainObject(undefined)); // false

// function isPlainObject(payLoad) {
//   return typeof(payLoad) === 'object' && !Array.isArray(payLoad) && payLoad!==null
// }

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// const letMeSeeYourName = (callback) => {
//   const name = prompt(`Введите Ваше имя`);
//   callback(name);
// };

// function greet(name) {
//   console.log (`Hello ${name}`)
// }

// letMeSeeYourName(greet);

// Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//++++++++++++++++++++++++++++++++++++++++++++

// function showProduct(product) {
//   const product = {
//     id: Date.now(),
//     name: name,
//     price: price,
//   }
//   callback(product);
// }

// const makeProduct = (name, price, callback) => {
//   console.log(product)
//  };


// makeProduct("apple", 30, showProduct)
//1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];


// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// 3  (reduce()) Необхідно одержати загальну суму балів студентів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const topStudents = studentRecords.filter(({ marks }) => marks > 50).map(({ name }) => name)
// console.log(topStudents)

// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const topStudents = studentRecords.filter(({ id }) => id > 120).reduce((acc, { marks }) => {
//   return marks+acc
// }, 0)
// console.log(topStudents)

//6 (map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//     orderedItems.forEach(function (element, index) {totalPrice += element});
// return totalPrice;
//     console.log(totalPrice)
// }
// calculateTotalPrice([12, 85, 37, 4])

// function changeEven(numbers, value) {
//   // Change code below this line

//   const newChangeEven = [];

//     numbers.forEach((element, index) => {
//         console.log(numbers[element]);
//     if (element[index] % 2 === 0) {
//       newChangeEven.push(element[index] + value);
//     }
//     console.log (newChangeEven)
//   })
//   return newChangeEven;

//   console.log (newChangeEven);

// }

// class Car {
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getBrand(){
//   return this.#brand
//   }

//   changeBrand(newBrand) {
//     return this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function ({userName = '', age= '', numbersOfPost = ''}) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;
// };

// User.prototype.getInfo = function() {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій`
// }

// const user = new User({ userName:"Lisa", age:"30", numbersOfPost:"13"});
// console.log(user)
// console.log(user.getInfo())

//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//++++++++++++++++++++++++++++++++++++++++++
// const Storage = function (items) {
//   this.items = items;
// }
 
// Storage.prototype.getItems = function () {
//   return this.items;
// }

// Storage.prototype.addItems = function (item) {
//   return this.items.push(item);
// }

// Storage.prototype.removeItem = function (item) {
//   if (!this.items.includes(item)) {
//   return `Такого товару немає на складі`
//   }
//   this.items = this.items.filter(value => value !== item )
// }


// const storage = new Storage(["apple", "mango"]);
// console.log(storage.getItems());
// storage.addItems("banana")
// storage.removeItem("apple");
// console.log(storage.getItems());

/*
    Є об'єкти користувачів та функція changeSalary.
    Необхідно змінити зарплату користувачів з допомогою цієї функции:
    Марку збільшити на 100, а Джеку зменшити на 200.
*/

// const worker1 = {
//   name: "Mark",
//   salary: 1300,
// };

// const worker2 = {
//   name: "Jack",
//   salary: 2500,
// };

// function changeSalary(value) {
//   this.salary += value;
// }

// changeSalary.bind(worker1, 100)();
// changeSalary.bind(worker2, -200)();

// console.log(worker1);
// console.log(worker2);

/*
  Реалізуйте  функцію MyString, в прототип додай методи: метод reverse(),
  який параметром приймає рядок, а повертає її в перевернутому вигляді,
  метод ucFirst(), який параметром приймає рядок та повертає цей же рядок,
  зробивши його першу літеру заголовком і метод ucWords,
  який приймає рядок і робить великою першу літеру кожного слова цього рядка.
 */
// const MyString = function () {

// }
// MyString.prototype.reverse = function (str) {
//   return str.split('').reverse().join('');
// }
// MyString.prototype.ucFirst = function (str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// MyString.prototype.ucWords = function (str) {
//   var words = str.split(' ');
//   var total = [];
//   words.forEach(element => {
//     total.push(this.ucFirst(element))
    
//   })
//   return total.join(' ');
// }

// const str = new MyString();

// console.log(str.reverse("abcde")); //выведет 'edcba'
// console.log(str.ucFirst("abcde")); //выведет 'Abcde'
// console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde

//Ми вже реалізували цю функцію, але коли ми фактично запускаємо код, властивість
//«name» доступна, але «firstName» і «lastName» недоступні. Усі властивості мають
//бути доступними. Ви можете знайти, що з ним не так? Також доступний тестовий
//пристрій

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;

//   return {
//     firstName: this.firstName,
//   lastName: this.lastName,
//     name: this.firstName + " " + this.lastName,
//   };
// }

// var n = new NameMe("John", "Doe");
// console.log(n.firstName); //Expected: John
// console.log(n.lastName); //Expected: Doe
// console.log(n.name); //Expected: John Doe

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }

//  get getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31

/*
  Клієнт
  Напиши клас Client який створює об'єкт із властивостями login та email.
  login має бути публічною властивістю, а email приватним.
  Доступ до email зроби через геттер та сетер.
  Перед тим як змінити емейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
  Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'
*/

// class Client {
//   #email
//   constructor(login, email) {
//     this.login = login;
//     this.#email = email;
//   }

//   #isValid(email) {
//     return email.includes('@');
//   }
  

//   get email() {
//      return this.#email
//   }
  
//   set email(newEmail) {
//     if (this.#isValid(newEmail) === true) {
//       this.#email = newEmail;
//     } else {
//       console.log('Email is not valid!')
// }
//    }
// }

// const client = new Client("dinka", "dinka@gmail.com");
// console.log(client.email);
// client.email = "dinkagmail.com";
// client.email = "dinka150509@gmail.com";
// console.log(client.email);