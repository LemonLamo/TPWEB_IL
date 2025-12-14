


//document.getElementById('myText').value = 'Hello World!';

document.getElementById('demo').innerHTML = 'Hello JavaScript!';


document.getElementById('demo').style.color = 'red';


 document.getElementById('demobutton').onclick = function() {
    alert('Button!');
}

document.getElementById('demobutton').addEventListener('click', function() {
    alert('Button was clicked!');
}); 


  let a = document.createElement('h2');
  let b = document.createTextNode('Bonjour tout le monde!');
  a.appendChild(b);
  document.body.appendChild(a);
    
const user = 'Sara';
localStorage.setItem('username', user);

let username= localStorage.getItem('username');
sessionStorage.setItem('sessionName', 'Session1');

//to delete the item
localStorage.removeItem('username');
localStorage.getItem('username'); // returns null
localStorage.clear(); // clears all local storage


document.getElementById('demoImage').src = '/TP/TP5P2/3.jpg';


let x = document.getElementsByTagName('titre')[0].parentNode;
console.log(x);

/*document.getElementById('demobutton').addEventListener('click', function() {
    alert('Button was clicked!');
}); 
*/

//on click with alert


document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est entièrement chargé et analysé");
});

document.getElementById("searchInput").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    console.log("Valeur saisie : " + inputValue);
});

document.getElementById("critereSelect").addEventListener("change", function(event) {
    var selectedValue = event.target.value;
    console.log("Critère sélectionné : " + selectedValue);
});


document.getElementById("boutonRechercer").addEventListener("click", function(event) {
    var critere = document.getElementById("searchInput").value;
    var resultatDiv = document.getElementById("resultat").value.toLower;
   
    rechercherlivre(critere, valeur);

})

   

/*
function rechercherlivre(critere, valeur) {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "livres.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var livres = JSON.parse(xhr.responseText);
            
            var livres = Document.getElementByTagName("livre");

            let tableauHTML = '<table>' + 
            '<tr><th>Titre</th><th>Auteur</th><th>Année</th></tr>';

            for (var i = 0; i < livres.length; i++) {
                var livre = livres[i];
                if (livre[critere] && livre[critere].toLowerCase().includes(valeur.toLowerCase())) {
                    tableauHTML += '<tr>' +
                        '<td>' + livre.titre + '</td>' +
                        '<td>' + livre.auteur + '</td>' +
                        '<td>' + livre.annee + '</td>' +
                        '</tr>';
                }
            }
            tableauHTML += '</table>';
            document.getElementById("resultat").innerHTML = tableauHTML;
        }   
    };
    xhr.send();
}
    */
