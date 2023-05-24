const token = "4cd983c04e9d5a4430df2943db819673c816a837b8a5cbb2dede61e5fccf49f9"
const url ='https://api.meteo-concept.com/api/forecast/daily?token='+token+'&insee=59350';
let body = document.querySelector("body");

fetch(url)
.then(Response => Response.json())
.then(data =>{
    console.log(data.forecast); console.log(data.forecast[0].tmax); console.log(data.city.name)
    let Tmax = document.getElementById("Temperature")
    let min = document.getElementById("TemperatureMin")
    let dateDuJour =document.getElementById("Date")
    let buton = document.getElementById("bubu")
    let butonn = document.getElementById("bubu1")
    let i = 0
    let datan = data.forecast[i]
   
    let caseTableau1 = document.querySelectorAll("td.tc1")
    console.log(caseTableau1)
    let caseTableau2 = document.querySelectorAll("td.tc2")
    let caseTableau3 = document.querySelectorAll("td.tc3")
console.log(data.forecast);


 for(let x = 0 ; x< caseTableau1.length; x++){
    caseTableau1[x].textContent= data.forecast[x].datetime.substring(0,10);
    caseTableau2[x].textContent = data.forecast[x].tmax + " c°";
    caseTableau3[x].textContent = data.forecast[x].tmin + " c°";
 }

    buton.addEventListener
    dateDuJour.innerHTML=`${datan.datetime.substring(0,10)}  a ${data.city.name}`;
    Tmax.innerHTML = `Température max  ${datan.tmax} degrée `;
    min.innerHTML=`Temperature  min ${datan.tmin} degrée `;


    function changementDeJour1 (){
        i++;
        datan = data.forecast[i];
        dateDuJour.innerHTML=`${datan.datetime.substring(0,10)}  a ${data.city.name}`;
        Tmax.innerHTML = `Température max  ${datan.tmax} degrée `;
        min.innerHTML=`Temperature  min ${datan.tmin} degrée `;
   }

   function changementDeJour2 (){
    i--;
    datan = data.forecast[i];
    dateDuJour.innerHTML=`${datan.datetime.substring(0,10)}  a ${data.city.name}`;
    Tmax.innerHTML = `Température max  ${datan.tmax} degrée `;
    min.innerHTML=`Temperature  min ${datan.tmin} degrée `;
    if(i<0){
        i=0
    }
    

   }
   
   buton.addEventListener("click",changementDeJour1)   
    butonn.addEventListener("click",changementDeJour2)   
    }


)




//Utilise les donné pour les renvoyer a l'api//

.catch(error => {
    console.error(`erreur détecté `+ error);
})//gére les erreur en cas d'erreurde la requette //

let fark = document.getElementById("buton");
function modecolorblack(){
    if(body.getAttribute("class")==="white"){
       body.classList.replace("white","darkmode"),fark.innerHTML="WhiteMode"; 
       
    }
    else{body.classList.replace("darkmode","white"),
    fark.innerHTML="DarkMode";}}
    fark.addEventListener("click",modecolorblack);



