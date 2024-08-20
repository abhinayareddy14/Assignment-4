document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');
    const resultDiv = document.getElementById('result');
    
    generateButton.addEventListener('click', () => {
    const minValue = parseInt(minValueInput.value, 10);
    const maxValue = parseInt(maxValueInput.value, 10);
    
    if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
    resultDiv.textContent = 'Please enter valid minimum and maximum values, with min < max.';
    return;
    }
    
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultDiv.textContent = `Random Number: ${randomNumber}`;
    });
    });