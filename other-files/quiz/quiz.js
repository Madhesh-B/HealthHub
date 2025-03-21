var con_2 = document.querySelector(".contain_2");
var con_1 = document.querySelector(".contain_1");
var sub_btn = document.getElementById("sub");
sub_btn.addEventListener("click" , function(event){
    event.preventDefault();
    con_1.classList.add("go");
    con_2.classList.add("come");
});