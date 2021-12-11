const btn = document.querySelector("button");
const evenList = document.querySelector(".even");
const oddList = document.querySelector(".odd");

btn.addEventListener("click", function () {
  evenList.innerHTML = ""; /* reset listy */
  oddList.innerHTML = ""; /* reset listy */

  let numbers = [];
  for (i = 0; i < 20; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    numbers.push(number);
  }
  console.log(numbers); /*20 losowych liczb całkowitych z zakresu od 1 do 100*/

  let oddNumbers = [];
  let evenNumbers = [];

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
      oddNumbers.push(numbers[i]);
    }
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  oddNumbers.sort(
    (a, b) => a - b
  ); /* lista nieparzystych liczb posortowana rosnąco*/

  evenNumbers.sort(
    (a, b) => a - b
  ); /* lista parzystych liczb posortowana rosnąco*/

  /* Wyświetlenie liczb w kolumnach: */
  for (i = 0; i < oddNumbers.length; i++) {
    const oddNumber = document.createElement("li");
    oddNumber.innerHTML = `${oddNumbers[i]}`;
    oddList.appendChild(oddNumber);
  }

  for (i = 0; i < evenNumbers.length; i++) {
    const evenNumber = document.createElement("li");
    evenNumber.innerHTML = `${evenNumbers[i]}`;
    evenList.appendChild(evenNumber);
  }

  console.log(oddNumbers);
  console.log(evenNumbers);
});
