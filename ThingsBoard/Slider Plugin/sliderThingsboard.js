self.onInit = function() {
    var myContainer = document.getElementById('myContainer');
    myContainer.style.width = self.ctx.settings.width + "px";
    myContainer.style.height = self.ctx.settings.height + "px";
    var imgElement = document.getElementById('imgElement');
    var stopButton = document.getElementById('stopButton');
    var playButton = document.getElementById('playButton');
    var nextButton = document.getElementById('next');
    var previousButton = document.getElementById('previous');
    
    var images = [];
    let i = 0;
    let change;
    
    images = self.ctx.settings.links;
    if(images == undefined) {
        images=[
            {link:"https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
            {link:"https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
            {link:"https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
            {link:"https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
            {link:"https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        ];
    }

    
    function nextImage(){i==images.length-1 ? i=0 : i++;imgElement.src = images[i].link;}
    function previousImage(){i<=0 ? i=images.length-1 : i--;imgElement.src = images[i].link;}
    
    stopButton.addEventListener("click", (e) => { clearInterval(change);});
    playButton.addEventListener("click", (e) => {change = setInterval(function(){nextImage()}, 2000);});
    nextButton.addEventListener("click", (e) => {nextImage();});
    previousButton.addEventListener("click", (e) => {previousImage();});

}

self.onDestroy = function() {
}
