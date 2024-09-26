// Communes and their corresponding BOs
const communes = [
    { name: "Agencourt", bo: "Beaune" },
    { name: "Dijon", bo: "Dijon" },
    { name: "Semur-en-Auxois", bo: "Semur" },
    // Ajouter ici toutes les communes avec leurs BOs
];

const maps = {
    "Beaune": "Carte Beaune",
    "Dijon": "Carte Dijon",
    "Semur": "Carte Semur"
};

document.getElementById('commune-input').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = ''; // Clear previous suggestions

    if (input) {
        const filteredCommunes = communes.filter(c => c.name.toLowerCase().startsWith(input));
        filteredCommunes.forEach(commune => {
            const div = document.createElement('div');
            div.textContent = commune.name;
            div.onclick = function() {
                selectCommune(commune);
            };
            suggestionsDiv.appendChild(div);
        });
    }
});

function selectCommune(commune) {
    document.getElementById('commune-input').value = commune.name;
    document.getElementById('bo-output').textContent = commune.bo;

    // Show map based on the BO
    const mapDiv = document.getElementById('map');
    mapDiv.textContent = maps[commune.bo]; // Replace with actual map implementation
    document.getElementById('suggestions').innerHTML = ''; // Clear suggestions
}
