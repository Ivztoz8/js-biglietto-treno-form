/* Variable declaration */
// Input variable declaration and selection
let nameSurname = document.getElementById("nameSur");

let kmTravel = document.getElementById("kmTraveler");

let typeAge = document.getElementById("typeOfAge");

let sectionTicket = document.getElementById("secTicket");

let buttonGen = document.getElementById("btGen");

let namePassenger = document.getElementById("namePassen");

let discountForAge = document.getElementById("discForAge");

let tPriz = document.getElementById("ticketPric");

let numberRandom5 = Math.floor(Math.random()*99999) + 1;
console.log(numberRandom5);

var numberRandom2 = Math.floor(Math.random()*99) + 1;
console.log(numberRandom2);

let cpCode = document.getElementById("ranCPcode"); 

let carr = document.getElementById("carriage"); 


/* Retrieve incoming data */
buttonGen.addEventListener("click", 
    function(){
        // View variable data in the console
        console.log(nameSurname.value, kmTravel.value, typeAge.value);
        
        // Remove class d-none from the section Your_Ticket
        sectionTicket.classList.remove("d-none");

        // Displays the passenger's name in HTML code
        namePassenger.innerHTML = nameSurname.value;
        
        // Displays the passenger's data in HTML code using the if cicle
        if(typeAge.value == 1 ){
            discountForAge.innerHTML = "Sconto 20%";
            tPriz.innerHTML = `${(kmTravel.value * 0.21) * 0.80} €`;
        }
        else if (typeAge.value == 2){
            discountForAge.innerHTML = "Prezzo pieno";
            tPriz.innerHTML = `${kmTravel.value * 0.21} €`; 
        }
        else{
            discountForAge.innerHTML = "Sconto 40%";
            tPriz.innerHTML = `${(kmTravel.value * 0.21) * 0.60} €`; 
        }
       
        // Displays the passenger's Random Code (CP) in HTML code
        numberRandom5.innerHTML = cpCode;
        numberRandom2.innerHTML = carr;
    } 
)
