let tableau1 = [25, 3, 12, 4, 11, 10];
let tableau2 = [35, 6, 99, 15, 8, 1 ,7]

function tri(tableau) {
    // on parcours la longueur du tableau - 1 index pour l'index 0
    for (i = 0; i < tableau.length - 1; i++) {
      for (j = 0; j < tableau.length - i - 1; j++) {
        if (tableau[j] > tableau[j + 1]) {
          let temp = tableau[j];
          tableau[j] = tableau[j + 1];
          tableau[j + 1] = temp;
        }
      }
    }
    return tableau;
  }

console.log(tri(tableau1));
console.log(tri(tableau2));
  


  
