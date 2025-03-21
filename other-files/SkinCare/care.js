var con_1 = document.querySelector(".contain_1");
var con_2 = document.querySelector(".contain_2");
var con_3 = document.querySelector(".contain_3");
var sub_btn = document.getElementById("sub");
var nxt_btn = document.getElementById("next-btn")
sub_btn.addEventListener("click" , function(event){
    event.preventDefault();
    con_1.classList.add("go");
    con_2.classList.add("come");
});
nxt_btn.addEventListener("click" , function(event){
    event.preventDefault();
    con_2.classList.add("go");
    con_3.classList.add("come");
});
