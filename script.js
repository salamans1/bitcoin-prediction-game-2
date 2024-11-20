document.getElementById('up-button').addEventListener('click', function() {
    showPrediction('Вверх');
});

document.getElementById('down-button').addEventListener('click', function() {
    showPrediction('Вниз');
});

function showPrediction(prediction) {
    document.querySelector('.prediction-section').style.display = 'none';
    document.querySelector('.result-section').style.display = 'block';
    document.getElementById('prediction-result').textContent = `Вы предсказали, что курс биткойна пойдет: ${prediction}`;
}

document.getElementById('reset-button').addEventListener('click', function() {
    document.querySelector('.prediction-section').style.display = 'block';
    document.querySelector('.result-section').style.display = 'none';
});
