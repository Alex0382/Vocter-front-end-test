var selectCar = document.getElementById("selectCar");
var bigImage = document.querySelector(".bigImage");
var selectCitroen = document.getElementById("selectCitroen");
var selectMazda = document.getElementById("selectMazda");
var selectMercedes = document.getElementById("selectMercedes");
var citroenArrow = document.getElementById("citroenArrow");
var mazdaArrow = document.getElementById("mazdaArrow");
var mercedesArrow = document.getElementById("mercedesArrow");
var standard = document.querySelector(".standard");
var standartA = standard.getElementsByTagName("A");
var A;
var link;
var linkPart;
var standardSelect = document.getElementById("standard_select");
var parts = document.querySelector(".select_part");
var partsA = parts.getElementsByTagName("A");
var partOpen = document.querySelector(".part");

var mercedesStandard = [
    "img/mercedes/minimum.jpg",
    "img/mercedes/standard.jpg",
    "img/mercedes/standard+.jpg",
    "img/mercedes/standard++.jpg",
    "img/mercedes/standard+++.jpg",
    "img/mercedes/full.jpg"
];
var mazdaStandard = [
    "img/mazda/minimum.jpg",
    "img/mazda/standard.jpg",
    "img/mazda/standard+.jpg",
    "img/mazda/standard++.jpg",
    "img/mazda/standard+++.jpg",
    "img/mazda/full.jpg"
];
var citroenStandard = [
    "img/citroen/minimum.jpg",
    "img/citroen/standard.jpg",
    "img/citroen/standard+.jpg",
    "img/citroen/standard++.jpg",
    "img/citroen/standard+++.jpg",
    "img/citroen/full.jpg"
];
var citroenParts = [
    "img/citroen/optics.jpg",
    "img/citroen/internal-thresholds.jpg",
    "img/citroen/external-thresholds.jpg",
    "img/citroen/doors.jpg",
    "img/citroen/rear-wings.jpg",
    "img/citroen/hood.jpg",
    "img/citroen/front-bumper.jpg",
    "img/citroen/rear-bumper.jpg"
];
var mercedesParts = [
    "img/mercedes/optics.jpg",
    "img/mercedes/internal-thresholds.jpg",
    "img/mercedes/external-thresholds.jpg",
    "img/mercedes/doors.jpg",
    "img/mercedes/rear-wings.jpg",
    "img/mercedes/hood.jpg",
    "img/mercedes/front-bumper.jpg",
    "img/mercedes/rear-bumper.jpg"
];
var mazdaParts = [
    "img/mazda/optics.jpg",
    "img/mazda/internal-thresholds.jpg",
    "img/mazda/external-thresholds.jpg",
    "img/mazda/doors.jpg",
    "img/mazda/rear-wings.jpg",
    "img/mazda/hood.jpg",
    "img/mazda/front-bumper.jpg",
    "img/mazda/rear-bumper.jpg"
];

mercedesArrow.style.display="inline-block";
standardSelect.style.backgroundImage="url(img/cursor.png)";
standardSelect.style.color="white";

selectCar.onclick = changeImage;
parts.onclick = changeImage;
parts.addEventListener("click", changeLink);
standard.onmouseover = function(e) { changeImage(e); changeLink(e)};
partOpen.onclick = openParts;

 function openParts(){
    if(parts.style.display == "block") 
        parts.style.display = "none";
   else  
        parts.style.display = "block";
    
};

function changeLink(e){
    var target = e.target;
    if(target.tagName !="A"){
        return;
    };
    red(target);
};

function red(node){
    standardSelect.style.backgroundImage="none";
    standardSelect.style.color="rgb(37, 46, 57)";
    if(A){
        A.style.backgroundImage="none";
        A.style.color="rgb(37, 46, 57)";   
    };
    A=node;
    A.style.backgroundImage="url(img/cursor.png)";
    A.style.color="white";
};
 
function changeImage(e){
    var target = e.target;
    while (target != null && target != this) {

        if (target.nodeName == 'A') {
           showImage(target.href);
           return false;
        }
         target = target.parentNode;
    } 
};

function showImage(href) {
    bigImage.src = href;
};


selectCitroen.onclick = function(){
    changePlan(citroenArrow, mazdaArrow, mercedesArrow, citroenStandard, citroenParts);
};

selectMazda.onclick = function(){
    changePlan(mazdaArrow, citroenArrow, mercedesArrow, mazdaStandard, mazdaParts);
};

selectMercedes.onclick = function(){
    changePlan(mercedesArrow, citroenArrow, mazdaArrow, mercedesStandard, mercedesParts);
};


function changePlan(active, other1, other2, planStandard, planParts)
{
    active.style.display="inline-block";
    other1.style.display="none";
    other2.style.display="none";

    for(var i=0; i<standartA.length; i++){
        link =standartA[i]
        link.href = planStandard[i];
        link.style.backgroundImage="none";
        link.style.color="rgb(37, 46, 57)";
    }
    for(var i=0; i<partsA.length; i++){
        linkPart =partsA[i]
        linkPart.href = planParts[i]; 
        linkPart.style.backgroundImage="none";
        linkPart.style.color="rgb(37, 46, 57)";
    }
    
    standardSelect.style.backgroundImage="url(img/cursor.png)";
    standardSelect.style.color="white";
    parts.style.display = "none";
}

for(var i=0; i<standartA.length; i++){
    link =standartA[i]
    link.href = mercedesStandard[i];   
};

for(var i=0; i<partsA.length; i++){
    linkPart =partsA[i]
    linkPart.href = mercedesParts[i]; 
};

