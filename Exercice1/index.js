//fonction affiche les nbres paires prend en parametres un min et un max et retourne les nbres paires entre min et max
function pairNumbers(min, max) {
    //initialisation du tableau result
    let result = [];
    //boucle pour parcourir les nbres entre min et max, si le nb est pair, on l'ajoute au tableau result
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    //retourne le tableau result en chaine de caractères séparés par une virgule
    return result.join(',');
}
//test de la fonction pairNumbers
console.log(pairNumbers(1, 10)); 
console.log(pairNumbers(5, 11));
console.log(pairNumbers(10, 20));


export default pairNumbers
