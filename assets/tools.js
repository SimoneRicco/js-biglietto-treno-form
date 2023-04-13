document.querySelector("#generate").addEventListener("click", function () {
    const nomeCognome = document.querySelector("#name-surname").value;
    const nKm = document.querySelector("#km").value;
    const age = document.querySelector("#age").value;
    const priceAtKm = 0.21;
    let finalPrice;
    let discount;
    console.log(nomeCognome + " + " + nKm + " + " + age);
    if (nKm > 0) {
        if (age == "min") {
            discount = 20;
            finalPrice = (priceAtKm * nKm) - ((priceAtKm * nKm * discount) / 100);
        } else {
            if (age == "mag") {
                discount = 40;
                finalPrice = (priceAtKm * nKm) - ((priceAtKm * nKm * discount) / 100);
            }
        }
        console.log(finalPrice);
        document.querySelector(".output").innerHTML = "Biglietto di " + nomeCognome + ": Sconto del " + discount + "%, Carrozza N" + (Math.floor(Math.random() * 21) + 1) + ", Codice CP " + (Math.floor(Math.random() * 100000) + 1) + ", Prezzo: " + finalPrice + "€";
    } else {
        alert("Numero di kilometri non valido");
    }
});