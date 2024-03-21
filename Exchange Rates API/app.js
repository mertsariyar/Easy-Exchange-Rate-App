const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency")
const secondCurrency = document.getElementById("secCurrency")
const result = document.getElementById("lastResult");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstCurrency, secondCurrency);
eventListeners();

function eventListeners() {
  amount.addEventListener("input", exchangeCurrency)
  firstCurrency.onchange = function() {
    currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
    ui.changeHeader(firstCurrency)
  }
  secondCurrency.onchange = function() {
    currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
    ui.changeHeader(secondCurrency)

  }
}

function exchangeCurrency() {
  currency.changeAmount(amount.value);
  currency.exchange()
  .then(result => ui.displayResult(result))
  .catch(err => console.log(err))
}