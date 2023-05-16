let knappar = document.getElementsByClassName("btn-primary");
let textarea = document.getElementById("message");
let autotext = ""
textarea=""

for(let i=0;i<knappar.length; i++){
    knappar[i].addEventListener("click", function(){

        autotext = knappar[i].parentElement.firstElementChild.innerHTML
        window.location.href = "file://jonkoping.se/shares/students05/0406stjo/Documents/GitHub/Slutprojekt/Kontakt_sida/Kontakt_index.html"
        textarea.innerHTML=autotext
    })
}

