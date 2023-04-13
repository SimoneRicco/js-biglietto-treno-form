const nomeCognome = document.querySelector("#name-surname").value;
const nKm = document.querySelector("#name-surname").value;
const age = document.querySelector("#age").value;
const priceAtKm = 0.21;
let finalPrice;
document.querySelector("#generate").addEventListener("click",function(){
    console.log(nomeCognome + " + " + nKm + " + " + age);
    if (nKm > 0) {
        // inizio calcolo
        if (age < 18) {
            finalPrice = (priceAtKm * nKm) - ((priceAtKm * nKm * 20) / 100);
        } else {
            if (age > 65) {
                finalPrice = (priceAtKm * nKm) - ((priceAtKm * nKm * 40) / 100);
            } else {
                finalPrice = priceAtKm * nKm;
            }
        }
        document.getElementById("output").innerHTML = "Il prezzo è di: " + finalPrice + " euro";
    } else {
        alert("Numero di kilometri non valido");
    }
});