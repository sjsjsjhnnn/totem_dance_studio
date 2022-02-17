$(function() {
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});

/*function openModal(){
    var btn = document.getElementById("na").querySelectorAll(".navRight")[0];
    var countHeight = 0;
    if(!btn.classList.contains("active")){
        btn.classList.add("active");
        document.getElementsByClassName("navRight")[0].style.height = "max-content";
        let navRight__Height = document.getElementsByClassName("navRight")[0].offsetHeight; 
 
        document.getElementsByClassName("navRight")[0].style.height = `${countHeight}px`;
 
        var Interval__navRight = setInterval(function(){
             countHeight+= 5;
             document.getElementsByClassName("navRight")[0].style.height = `${countHeight}px`;
             console.log(`${countHeight}px`);
             if(countHeight + 1 > navRight__Height + 30){
                 clearInterval(Interval__navRight);
             }
        },1)
 
    }else{
        btn.classList.remove("active")
        document.getElementsByClassName("navRight")[0].style.height = `${countHeight}px`;
    }
}*/

var masFonScrol = ["img/fonScroll1.jpg","img/fonScroll2.jpg","img/fonScroll3.jpg","img/fonScroll4.jpg","img/fonScroll5.jpg","img/fonScroll6.jpg","img/fonScroll7.jpg"]
var countFonScroll = 0;
document.getElementsByClassName("scrolll")[0].style.opacity = "1";
function scrollGo(counts){
    document.getElementsByClassName("scrolll")[countFonScroll].style.opacity = "0.5";
    console.log(`1:${countFonScroll}`);
    countFonScroll = counts;
    console.log(`2:${countFonScroll}`);
    document.getElementsByClassName("fon1")[0].style.background = `url(${masFonScrol[countFonScroll]})`
    document.getElementsByClassName("scrolll")[countFonScroll].style.opacity = "1";
    document.getElementsByClassName("fon1")[0].style.backgroundSize = "cover";
    console.log(`3:${countFonScroll}`);
}
var count = 1;
var count1 = 1;
var img = document.getElementsByClassName("a")[0];
var back = document.getElementsByClassName("blockScroll")[0];
document.getElementsByClassName("scrolls2")[0].style.background = "red";
document.getElementsByClassName("scrolls2")[0]. style.opacity = "1";
function blackColor(a,b,c,d){
    img.style.background = `url(${d})`;
    img.style.backgroundSize = "100%";
    img.style.backgroundRepeat  = "no-repeat";
    document.getElementsByClassName("scrolls2")[a].style.background = "red";
    document.getElementsByClassName("scrolls2")[a].style.opacity = "1";
    document.getElementsByClassName("scrolls2")[b].style.background = "black";
    document.getElementsByClassName("scrolls2")[c].style.background = "black";
    document.getElementsByClassName("scrolls2")[b].style.opacity = "0.3";
    document.getElementsByClassName("scrolls2")[c].style.opacity = "0.3";
}
function arrowRight(){
    count++;
    if(count == 1){
        blackColor(0,1,6, "img/one.png");
    }else if(count == 2){
        blackColor(1,0,2, "img/two.png");
    }else if(count == 3){
        blackColor(2,3,1, "img/tree.png");
    }else if(count == 4){
        blackColor(3,2,4, "img/fore.png");
    }else if(count == 5){
        blackColor(4,3,5, "img/five.png");
    }else if(count == 6){
        blackColor(5,4,6, "img/six.png");
    }else if(count == 7){
        blackColor(6,5,0, "img/seven.png");
    }else if(count == 8){
        count = 1;
        blackColor(0,1,6, "img/one.png");
    }
}
function arrowLeft(){
    count--;
    if(count == 1){
        blackColor(0,1,6, "img/one.png");
    }else if(count == 2){
        blackColor(1,0,2, "img/two.png");
    }else if(count == 3){
        blackColor(2,3,1, "img/tree.png");
    }else if(count == 4){
        blackColor(3,2,4, "img/fore.png");
    }else if(count == 5){
        blackColor(4,3,5, "img/five.png");
    }else if(count == 6){
        blackColor(5,4,6, "img/six.png");
    }else if(count == 7){
        blackColor(6,5,0, "img/seven.png");
    }else if(count == 0){
        count = 7;
        blackColor(6,5,0, "img/seven.png");
    }
}
function scrolls2(a,b){
    img.style.background = `url(${a})`;
    img.style.backgroundSize = "100%";
    img.style.backgroundRepeat  = "no-repeat";
    document.getElementsByClassName("scrolls2")[b].style.background = "red";
    document.getElementsByClassName("scrolls2")[b].style.opacity = "1";
    document.getElementsByClassName("scrolls2")[count - 1].style.background = "black";
    document.getElementsByClassName("scrolls2")[count - 1].style.opacity = "0.3";
}
function scroll1(){
    scrolls2("img/one.png",0)
    count = 1;
}
function scroll2(){
    console.log(1);
    scrolls2("img/two.png",1)
    count = 2;
}
function scroll3(){
    scrolls2("img/tree.png",2)
    count = 3;
}
function scroll4(){
    scrolls2("img/fore.png",3)
    count = 4;
}
function scroll5(){
    scrolls2("img/five.png",4)
    count = 5;
}
function scroll6(){
    scrolls2("img/six.png",5)
    count = 6;
}
function scroll7(){
    scrolls2("img/seven.png",6)
    count = 7;
}