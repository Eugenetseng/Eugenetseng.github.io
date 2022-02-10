var title=document.getElementById("title");
var content=document.getElementById("content");
var btn=document.getElementById("btn");
var list=document.getElementById("list");
var btn2=document.getElementById("btn2");

btn.addEventListener("click", function(){
    list.innerHTML= list.innerHTML+ `
        <div class="article">
        <h3>${title.value}</h3>
        <p>${content.value}</p> <hr>
    </div>
 `;})   
 function turnToSchedule(){
    document.getElementById("btn2").src="schedule.jpg.png";
 }
 btn2.addEventListener("click", function(){
    document.getElementById("btn2").href="schedule.jpg.png";

 ;})
 

