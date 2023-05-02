let allaknapp = document.getElementById("allaknapp");
let sedanknapp = document.getElementById("sedanknapp");
let touringknapp = document.getElementById("touringknapp");
let halvkombiknapp = document.getElementById("halvkombiknapp");
let sportknapp = document.getElementById("sportknapp");

let allacard = document.getElementsByClassName("card");
let halvkombicard = document.getElementsByClassName("halvkombicard");
let sedancard = document.getElementsByClassName("sedancard");
let sportcard = document.getElementsByClassName("sportcard");
let touringcard = document.getElementsByClassName("touringcard")

allaknapp.addEventListener("click", function()
{
    for(let i=0; i<9;i++){
        allacard[i].style.display="flex";
    }
    
})

sedanknapp.addEventListener("click", function()
{
    for(let i=0; i<9;i++){
        allacard[i].style.display="none";
    }
    
    let sedannumber = sedancard.length;

    for(let i=0; i<sedannumber; i++){

        sedancard[i].style.display="flex";
    }
}
)

touringknapp.addEventListener("click", function()
{

    for(let i=0; i<9;i++){
        allacard[i].style.display="none";
    }
    
    touringnumber=touringcard.length;

    for(let i=0; i<touringnumber; i++){

        touringcard[i].style.display="flex";
    }
}
)

sportknapp.addEventListener("click", function()
{
    for(let i=0; i<9;i++){
        allacard[i].style.display="none";
    }
    
    sportnumber=sportcard.length;

    for(let i=0; i<sportnumber; i++){

        sportcard[i].style.display="flex";
    }

    
}
)

halvkombiknapp.addEventListener("click", function()
{
    for(let i=0; i<9;i++){
        allacard[i].style.display="none";
    }
    
    halvkombinumber=halvkombicard.length;

    for(let i=0; i<halvkombinumber; i++){

        halvkombicard[i].style.display="flex";

    }
}
)
