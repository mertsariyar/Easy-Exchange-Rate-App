class UI {
  constructor(firstSelect, secondSelect) {
    this.firstSelect = firstSelect;
    this.secondSelect = secondSelect;
    this.result = document.getElementById("lastResult");
  }
  changeHeader() {
    const outputFirst = document.getElementById("outputFirst")
    const outputSec = document.getElementById("outputSec");
    outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    outputSec.textContent =  this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
  }

  displayResult(result) {
    this.result.value = result;
  }
}