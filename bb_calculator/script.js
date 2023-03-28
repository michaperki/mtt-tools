const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const chipCount = parseInt(document.getElementById('chip-count').value);
  const blindLevel = document.getElementById('blind-level').value;

  if (!chipCount || !blindLevel) {
    resultDiv.innerText = "Please enter both chip count and blind level.";
    return;
  }

  const [smallBlind, bigBlind] = blindLevel.split('/').map(num => parseInt(num));

  if (!smallBlind || !bigBlind) {
    resultDiv.innerText = "Invalid blind level format. Please use the format 'small blind/big blind', e.g. '10/20'.";
    return;
  }

  const bigBlinds = Math.floor(chipCount / bigBlind);

  resultDiv.innerText = `You have ${bigBlinds} big blinds.`;
});
