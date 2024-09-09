// Créez une fonction JavaScript appelée `calculateAverage` qui prend un tableau de nombres en tant que paramètre et retourne la moyenne de ces nombres. Si le tableau est vide, il faudra retourner un message `No numbers to calculate average`
const numbers = []; 
function calculateAverage(numbers) {
    // Vérifie si le tableau est vide
    if (numbers.length === 0) {
        return 'No numbers to calculate average';
    }

    // Calcul de la somme des nombres dans le tableau
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Calcul et retourne la moyenne des nombres
    return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage(numbers)) // No numbers to calculate average

export default calculateAverage
