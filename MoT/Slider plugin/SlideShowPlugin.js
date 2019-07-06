var slidShow = (function () {
    var slidShow = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "slidShow";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 400);
        self.SetParameterValue("PluginHeight", 300);
        delete self.Parameters.DataSource;
        delete self.Parameters.Query;

    };
    //do GridPlugin extend MOT_Plugin
    extend(slidShow, MOT_Plugin);

    slidShow.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);
        var container = document.createElement('section');
        container.style.top = self.GetParameterValue("LocationY") + "px"; //To relocate the plugin in a different position according to y axis from the top of the page
        container.style.left = self.GetParameterValue("LocationX") + "px"; //To relocate the plugin in a different position according to x axis from the left of the page
        container.style.width = self.GetParameterValue("PluginWidth") + "px";
        container.style.height = self.GetParameterValue("PluginHeight") + "px";
        container.style.backgroundColor = "#ccc";
        container.style.position = "relative";
        var imgElement = document.createElement('img');
        imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDW-lnBDawlv7jUABON8ygB0GRTC57aI-ND9SdQ8LpU7cSKRy"
        imgElement.style.width = "100%";
        imgElement.style.height = "100%";
        var sliderContainer = document.createElement('div');
        sliderContainer.style.width = "100%";
        sliderContainer.style.height = "100%";
        var stopButton = document.createElement('button');
            stopButton.textContent = 'STOP';
            stopButton.style.position = "absolute";
            stopButton.style.color = "#333";
            stopButton.style.backgroundColor = "transparent";
            stopButton.style.border = "2px solid green";
            stopButton.style.cursor = "pointer";
            stopButton.style.zIndex = "5";
            stopButton.style.fontSize = "22px";
            stopButton.style.margin = "5px";
            stopButton.style.padding = "8px";
            stopButton.style.borderRadius = "10px";
            stopButton.style.bottom = "-60px";
            stopButton.style.left = "50%";
            stopButton.style.width = "50%";
        var playButton = document.createElement('button');
            playButton.textContent = 'PLAY';
            playButton.style.position = "absolute";
            playButton.style.color = "#333";
            playButton.style.backgroundColor = "transparent";
            playButton.style.border = "2px solid green";
            playButton.style.cursor = "pointer";
            playButton.style.zIndex = "5";
            playButton.style.fontSize = "22px";
            playButton.style.margin = "5px";
            playButton.style.padding = "8px";
            playButton.style.borderRadius = "10px";
            playButton.style.bottom = "-60px";
            playButton.style.left = "0";     
            playButton.style.width = "50%";     
        var nextButton = document.createElement('button');
            nextButton.textContent = '>';
            nextButton.style.position = "absolute";
            nextButton.style.color = "#fff";
            nextButton.style.backgroundColor = "transparent";
            nextButton.style.border = "none";
            nextButton.style.cursor = "pointer";
            nextButton.style.zIndex = "5";
            nextButton.style.fontSize = "22px";
            nextButton.style.top = "45%";
            nextButton.style.right = "10px";
        var previousButton = document.createElement('button');
            previousButton.textContent = '<';
            previousButton.style.position = "absolute";
            previousButton.style.color = "#fff";
            previousButton.style.backgroundColor = "transparent";
            previousButton.style.border = "none";
            previousButton.style.cursor = "pointer";
            previousButton.style.zIndex = "5";
            previousButton.style.fontSize = "22px";
            previousButton.style.top = "45%";
            previousButton.style.left = "10px";

        var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGiwQ7rGDtMyC6U6iEVeEIPIgQ0DbgRFz8d9LzbY0KCa3LTpj",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtL1zr6IhkA4AzcYe8uaVNEStXuSeM0C_i88W4VbXMu2S_PXclA",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bNkfAKch5ZHsLY_Zs1jOiONA_5IogljOR2egzGLJAQG_cLei"];
        let i = 0;
        let change;

        function nextImage(){i==images.length-1 ? i=0 : i++;imgElement.src = images[i];}
        function previousImage(){i<=0 ? i=images.length-1 : i--;imgElement.src = images[i];}

        stopButton.addEventListener("click", (e) => { clearInterval(change);});
        playButton.addEventListener("click", (e) => {change = setInterval(function(){nextImage()}, 2000);});
        nextButton.addEventListener("click", (e) => {nextImage();});
        previousButton.addEventListener("click", (e) => {previousImage();});
        //////////////////////////////////////
        sliderContainer.appendChild(imgElement);
        container.appendChild(sliderContainer);
        container.appendChild(previousButton);
        container.appendChild(playButton);
        container.appendChild(stopButton);
        container.appendChild(nextButton);
        WorkSpace.appendChild(container);


          // add css classes to WorkSpace div
       self.addCssClasses(sliderContainer);
   
    };

    return slidShow;
}());
