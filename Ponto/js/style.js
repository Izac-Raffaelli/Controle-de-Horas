function category(c){
    let item = document.getElementById("item-"+c).innerHTML
    document.getElementsByTagName("input")[0].value = item;    
}

function dropDown(p){
    let e = document.getElementsByClassName("dropDown")[0];
    let d = ["block","none"];
    e.style.display = d[p];

    let t = ["0px","0px","-10px"];

    setTimeout(function(){
        e.style.transform ="translate("+t[p]+")";
    },0);
}
function category2(c){
    let item = document.getElementById("item-"+c).innerHTML;
    document.getElementsByClassName("input")[0].value = item;
    
}

function dropDown2(p){
    let e = document.getElementsByClassName("dropDown2")[0];
    let d = ["block","none"];
    e.style.display = d[p];

    let t = ["0px","0px","-10px"];

    setTimeout(function(){
        e.style.transform ="translate("+t[p]+")";
    },0);
}

