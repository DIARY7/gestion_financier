var link = document.querySelectorAll(".nav-link");
var indice = Number(localStorage.getItem("currentLink"));
var ajouter = document.getElementById("ajouter");

// Pour écouter le relâchement d'une touche, utilisez 'keyup'
document.addEventListener('keyup', function(event) {
    console.log('Touche relâchée :', event.code);
    if (event.code == "ArrowDown") {
        
        let url = link[indice+1].href;
        window.location.href = url;
        localStorage.setItem("currentLink",indice+1);
    }
    if (event.code == "ArrowUp") {     
        
        let url = link[indice-1].href;
        window.location.href = url;
        localStorage.setItem("currentLink",indice-1);     
    }
    
});

ajouter.addEventListener('click',()=>{
    var plat = document.getElementById("platAjout");
    var divCommander = document.getElementById("platCommander");
    var option = document.querySelectorAll("#platAjout option");    
    divCommander.innerHTML+=`
    <tr> 
    <td>
        <li style='margin-right: 110px;'>  ${option[plat.selectedIndex].textContent} <input type='hidden' value='${plat.value}' name='plat${plat.value}' > </td> </li> 
        <td>  Quantite: </td>
    <td> <input type='number' style='width:100px; text-align:center;'  class='form-control' value='0' min='0' name='qte${plat.value}' > </td>  </tr> 
    `    
    plat.removeChild(option[plat.selectedIndex]);

});