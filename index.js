//Intersection Obesrver 

var scoller = document.getElementById("scroller");
var pivotSentinal = document.querySelector(".sentinal");

function loadImages(n){
    for(let i=0;i<n;i++)
    {
        var li = document.createElement('li');
        li.classList.add("item");
        scoller.appendChild(li);
    }
}

var IntersectionObsersver = new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.intersectionRatio >0))//if user scroll has crossed the pivot point , only when user moves ahead of pivot point then callback func is called
    {
        loadImages(20);
        scoller.appendChild(pivotSentinal);
        loadImages(5);
    }
});
IntersectionObsersver.observe(pivotSentinal);//code is stating that intersection observer should observer the pivot point and once when user scroll reaches the pivot point call new IntersectionObserver(entries) and load next images