var navmenuAnchorTag = document.querySelectorAll('.nav-menu a');
// console.log(navmenuAnchorTag);

for(var i=0;i<navmenuAnchorTag.length;i++){
    console.log("HELLO");
    navmenuAnchorTag[i].addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        // console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionId);
        // console.log(targetSection);
        var scrolltill = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top()<=0)
            {
                clearInterval(scrolltill);
                return;
            }
            window.scrollBy(0,50);
        },50);
    });
}