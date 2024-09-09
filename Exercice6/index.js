// Sélectionne l'écran de la calculatrice
const display = document.getElementById('display');

// Fonction qui affiche les valeurs à l'écran
function appendToDisplay(value) {
    display.value += value;
}

// Fonction pour effacer l'écran
function clearDisplay() {
    display.value = '';
}

// Fonction pour calculer les valeurs
function calculateResult() {
    try {
        // Calcule la valeur
        display.value = eval(display.value);
    } catch (error) {
        // Affiche un message d'erreur si une erreur survient lors du calcul
        display.value = 'Error';
    }
}

// Écouteur d'événement sur les boutons
document.querySelectorAll('button[data-value]').forEach(button => {
    button.addEventListener('click', function() {
        appendToDisplay(this.getAttribute('data-value'));
    });
});

// Écouteur pour le bouton "C" (clear)
document.getElementById('clear').addEventListener('click', clearDisplay);

// Écouteur pour le bouton "="
document.getElementById('equals').addEventListener('click', calculateResult);
