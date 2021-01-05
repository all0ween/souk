
var nombreArticles = "0"; 

document.querySelector('#ARTICLES').innerText = nombreArticles;


function maFonction() {
 nombreArticles++;
 document.querySelector('#ARTICLES').innerText = nombreArticles;
}


document.getElementById('BOF').onmouseover=function(){
document.getElementById('BARRENOIRE').style.visibility = "visible";
}
document.getElementById('BOF').onmouseout=function(){
document.getElementById('BARRENOIRE').style.visibility = "hidden";
}










