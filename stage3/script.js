// returns calculator - simple
const buttonEl = document.getElementById('returns-button');
console.log(buttonEl);
const outputEl = document.getElementById('output-label');

buttonEl.addEventListener('click', function () {
  const capital = parseFloat(document.getElementById('capital').value);
  const years = parseFloat(document.getElementById('years').value);
  const interest = parseFloat(document.getElementById('interest').value);
  if (!isNaN(capital) && !isNaN(years) && !isNaN(interest)) {
    const totalReturns = capital*(1+((interest/100)*years));
    outputEl.innerText = `₹ ${totalReturns}`;
  }
})