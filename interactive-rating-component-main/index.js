var button = document.querySelectorAll(".btn-rating");
var result = document.getElementById("selres");
var submit = document.querySelector(".submit");
var rating = document.querySelector(".rating");
var thanks = document.querySelector(".thanks");
var please = document.querySelector(".plsrateus");

submit.addEventListener("click", changePage);

function changePage(){
    if(result.innerHTML==''){
    please.classList.remove("hidden");
    }
    else{
        rating.style.display="none";
        thanks.classList.remove("hiddeen");
    }
}

button.forEach(function (x){
    x.addEventListener("click",function(){
    result.innerHTML=x.innerHTML;
    });
});