function toonTekst() {
	var naam = document.getElementById("tekstveld").value;
	var resultaat = document.getElementById("resultaat");
	resultaat.innerHTML = "Hallo " + naam + "! Een leuke dag gewenst!";
}