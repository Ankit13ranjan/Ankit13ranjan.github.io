// var navmenuAnchorTag = document.querySelectorAll('.nav-menu a');
// // console.log(navmenuAnchorTag);

// for(var i=0;i<navmenuAnchorTag.length;i++){
//     console.log("HELLO");
//     navmenuAnchorTag[i].addEventListener('click', function(event) {
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         // console.log(this.textContent);
//         var targetSection = document.getElementById(targetSectionId);
//         // console.log(targetSection);
//         var scrolltill = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top()<=0)
//             {
//                 clearInterval(scrolltill);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },50);
//     });
// }







var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);