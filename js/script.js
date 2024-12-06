document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const celsius = parseFloat(document.getElementById('celsius').value);

    if (isNaN(celsius)) {
        document.getElementById('result').textContent = 'Please enter a valid number!';
        document.getElementById('result').style.color = '#ffcc00'; 
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').textContent = `${celsius}°C je ${fahrenheit.toFixed(2)}°F.`;
    document.getElementById('result').style.color = '#fff'; 
});