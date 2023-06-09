//Je créer ma fonction rand10 en premier lieu
// Je combine deux méthodes préfaite de js, math.floot() et math.random()
// Math.random permet de générer un nombre décimal aléatoire de 0 à 0.99
// Math.floor permet de générer un nombre entier, donc de changer mon nombre décimal en nombre entier.
// J'utilise donc la fonction Math.random() dans la fonction Math.floor() pour avoir un nombre aléatoire entier ce qui a du sens avec le commentaire suivant =>
// Je précise que je veux multiplier le resultat de math.random par 10 (Le resultat maximum, 0.99x10 = 9.9, qui sera transformer en entier avec math.floor
// Ce qui revient à avoir un entier entre 1 et 10

//J'appelle ma fonction pour générer un nombre aléatoire de 1 à 10 dans la console.

function rand10(){
   return Math.floor(Math.random() * 10)+1;
}
console.log(rand10());