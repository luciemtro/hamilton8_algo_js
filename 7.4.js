const readlineSync = require("readline-sync");
indexChoisi = readlineSync.questionInt(" Hello! Welcome to the Pizza Flavors Manager. Please choose your actions : 1 - List all the pizza flavors 2 - Add a new pizza flavor 3 - Remove a pizza flavor 4 - Exit this program. Enter your action's number: ")


const menuPizza = [
    {list: "List all the pizza flavors"},
    {add: "Add a new pizza flavor"},
    {remove: "Remove a pizza flavor"},
    {exit : "Exit this program"}
]
switch (indexChoisi){
    case 1 :
        let saveur
        console.log(saveur = " Pizza 4 fromage, pizza vegétarienne, pizza carbonara, pizza quatres saisons. ");
        break;
    case 2 : 
        let addPizza = readlineSync.question("Veuillez ajouter votre suggestion de pizza : ")
        console.log(" Votre nouvelle pizza " + addPizza + " a été ajoutée à notre menu.")
        break;
    case 3 : 
        let removePizza = readlineSync.question("Quelle pizza souhaitez-vous supprimer ? ")
        console.log(" La pizza " + removePizza + " a été supprimée de notre menu. ")
        break;
    case 4 : 
        console.log(" Vous avez décidé de fermer le menu. ")
}














