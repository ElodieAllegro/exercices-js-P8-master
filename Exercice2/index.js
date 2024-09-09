// Créez une fonction JavaScript appelée `calculate` qui prend deux nombres entiers et un opérateur en tant que paramètres (`+`, `-`, `*`, `/`). La fonction doit effectuer l'opération mathématique correspondante (addition, soustraction, multiplication ou division) et retourner le résultat.
function calculate(n1, n2, operator) {
    // Vérifie si l'opérateur est valide
    const operators = ['+', '-', '*', '/'];
    if (!operators.includes(operator)) {
        return 'Operateur invalide';
    }

    // Effectue l'opération mathématique correspondante
    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            // Vérifie si la division par zéro est proposée
            if (n2 === 0) {
                return 'Division par zéro n\'est pas autorisée';
            }
            return n1 / n2;
        default:
            return 'Operateur invalide';
    }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
