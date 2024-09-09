//Vous devez mettre en place un observateur d’événement dans le fichier `index.js` afin d’afficher le message `Bonjour, vous avez cliqué sur le bouton !` lors du clic
const btn = document.querySelector('#myButton');
//ecouteur d'evenement
btn.addEventListener('click', function() {
  const p = document.createElement('p');
  p.textContent = 'Bonjour, vous avez cliqué sur le bouton!';
  document.body.appendChild(p);
})

