/*
document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const reamurInput = document.getElementById("reamur");
    const rankineInput = document.getElementById("rankine");
    const delisleInput = document.getElementById("delisle");
    const romerInput = document.getElementById("romer");
    const newtonInput = document.getElementById("newton");

    function convertFromCelsius() {
        let celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            kelvinInput.value = (celsius + 273.15).toFixed(2);
            fahrenheitInput.value = ((celsius * 9 / 5) + 32).toFixed(2);
            reamurInput.value = (celsius * 0.8).toFixed(2);
            rankineInput.value = (celsius * 1.8 + 491.67).toFixed(2);
            delisleInput.value = (100 - celsius) * (3 / 2).toFixed(2);
            romerInput.value = ((celsius * 21 / 40) + 7.5).toFixed(2);
            newtonInput.value = (celsius * (33 / 100)).toFixed(2);
        } else {
            kelvinInput.value = "";
            fahrenheitInput.value = "";
            reamurInput.value = "";
            rankineInput.value = "";
            delisleInput.value = "";
            romerInput.value = "";
            newtonInput.value = "";
        }
    }

    function convertFromKelvin() {
        let kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin)) {
            celsiusInput.value = (kelvin - 273.15).toFixed(2);
            fahrenheitInput.value = ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
            reamurInput.value = 1;
            rankineInput.value = 1;
            delisleInput.value = 1;
            romerInput.value = 1;
            newtonInput.value = 1;
        } else {
            celsiusInput.value = "";
            fahrenheitInput.value = "";
            reamurInput.value = "";
            rankineInput.value = "";
            delisleInput.value = "";
            romerInput.value = "";
            newtonInput.value = "";
        }
    }

    function convertFromFahrenheit() {
        let fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
            kelvinInput.value = (((fahrenheit - 32) * 5 / 9) + 273.15).toFixed(2);
            reamurInput.value = 1;
            rankineInput.value = 1;
            delisleInput.value = 1;
            romerInput.value = 1;
            newtonInput.value = 1;
        } else {
            celsiusInput.value = "";
            kelvinInput.value = "";
            reamurInput.value = "";
            rankineInput.value = "";
            delisleInput.value = "";
            romerInput.value = "";
            newtonInput.value = "";
        }
    }

    function convertFromReamur() {

    }

    function convertFromRankine() {

    }

    function convertFromDelisle() {

    }

    function convertFromRomer() {

    }

    function convertFromNewton() {

    }


    celsiusInput.addEventListener("input", convertFromCelsius);
    kelvinInput.addEventListener("input", convertFromKelvin);
    fahrenheitInput.addEventListener("input", convertFromFahrenheit);
    reamurInput.addEventListener("input", convertFromReamur);
    rankineInput.addEventListener("input", convertFromRankine);
    delisleInput.addEventListener("input", convertFromDelisle);
    romerInput.addEventListener("input", convertFromRomer);
    newtonInput.addEventListener("input", convertFromNewton);
});

*/
document.addEventListener("DOMContentLoaded", function () {
    const inputs = {
        celsius: document.getElementById("celsius"),
        kelvin: document.getElementById("kelvin"),
        fahrenheit: document.getElementById("fahrenheit"),
        reamur: document.getElementById("reamur"),
        rankine: document.getElementById("rankine"),
        delisle: document.getElementById("delisle"),
        romer: document.getElementById("romer"),
        newton: document.getElementById("newton"),
        div2: document.getElementById("div2") // Aggiunto div2 per sincronizzarlo
    };

    // Funzione per convertire qualsiasi unità in Celsius
    function toCelsius(value, unit) {
        switch (unit) {
            case "kelvin": return value - 273.15;
            case "fahrenheit": return (value - 32) * 5 / 9;
            case "reamur": return value * 1.25;
            case "rankine": return (value - 491.67) * 5 / 9;
            case "delisle": return 100 - (value * 2 / 3);
            case "romer": return (value - 7.5) * 40 / 21;
            case "newton": return value * 100 / 33;
            default: return value; // Se è già Celsius
        }
    }

    // Funzione per convertire da Celsius a tutte le altre unità
    function fromCelsius(celsius) {
        return {
            kelvin: (celsius + 273.15).toFixed(2),
            fahrenheit: ((celsius * 9 / 5) + 32).toFixed(2),
            reamur: (celsius * 0.8).toFixed(2),
            rankine: (celsius * 1.8 + 491.67).toFixed(2),
            delisle: ((100 - celsius) * 3 / 2).toFixed(2),
            romer: ((celsius * 21 / 40) + 7.5).toFixed(2),
            newton: (celsius * 33 / 100).toFixed(2),
            div2: celsius.toFixed(2) // Sincronizza div2 con il valore in Celsius
        };
    }

    // Funzione generica per aggiornare tutti i campi
    function updateTemperatures(event) {
        let inputUnit = event.target.id; // Trova da quale campo parte la conversione
        let value = parseFloat(event.target.value);

        if (!isNaN(value)) {
            let celsius = toCelsius(value, inputUnit); // Converti il valore in Celsius
            let converted = fromCelsius(celsius); // Ottieni tutte le altre conversioni

            // Aggiorna tutti i campi eccetto quello di input
            for (let unit in inputs) {
                if (unit !== inputUnit) {
                    inputs[unit].value = converted[unit] || celsius.toFixed(2);
                }
            }
        } else {
            // Se il valore inserito è vuoto o non valido, pulisce tutti i campi
            for (let unit in inputs) {
                if (unit !== inputUnit) {
                    inputs[unit].value = "";
                }
            }
        }
    }

    // Aggiunge l'event listener a tutti gli input
    for (let unit in inputs) {
        inputs[unit].addEventListener("input", updateTemperatures);
    }
});
