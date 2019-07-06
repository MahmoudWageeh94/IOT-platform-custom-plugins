/*global MOT_Plugin,console,extend*/
var youTube = (function () {
    var youTube = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "youTube";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 420);
        self.SetParameterValue("PluginHeight", 345);
        // delete self.Parameters.DataSource;
        // delete self.Parameters.Query;
        delete self.Parameters.Query;
        delete self.Parameters.HelpTip;
        delete self.Parameters.Version;
        delete self.Parameters.CssClasses;
        self.Parameters.links = self.addPluginParameters("links", "input", "links", "links ", "Enter the links that you want to by in video Plugin seperated by ** ex:https://www.youtube.com/watch?v=tgbNymZ7vqY**https://www.youtube.com/watch?v=B7UmUX68KtE**https://www.youtube.com/watch?v=IxuYTTVbzeM");
        self.Parameters.MoreThanTwo = self.addPluginParameters("MoreThanTwo", "True/False",1, "MoreThanTwo", "if there is more than one link");
        self.Parameters.loop = self.addPluginParameters("loop", "True/False",1, "loop", "video loop if you want");
        self.Parameters.FullScreen = self.addPluginParameters("FullScreen", "True/False",1, "FullScreen", "if you want the video be able to work in full screen");
        self.Parameters.autoPlay = self.addPluginParameters("autoPlay", "True/False",1, "autoPlay", "if you want video start when page is been loaded");
        self.Parameters.width=self.addPluginParameters("width","input","width","width","Enter the width you want");
        self.Parameters.Height=self.addPluginParameters("Height","input","Height","Height","Enter the Height you want")
        self.Parameters.width.addProperty("SelectedValue", "420");
        self.Parameters.Height.addProperty("SelectedValue", "345");
        self.Parameters.links.addProperty("SelectedValue", "https://www.youtube.com/watch?v=QSIPNhOiMoE**https://www.youtube.com/watch?v=QSIPNhOiMoE");
       

    };
    //do GridPlugin extend MOT_Plugin
    extend(youTube, MOT_Plugin);

    youTube.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);
         var frm = document.createElement("iframe")
            frm.style.top = self.GetParameterValue("LocationY") + "px"; //To relocate the plugin in a different position according to y axis from the top of the page
        frm.style.left = self.GetParameterValue("LocationX") + "px"; //To relocate the plugin in a different position according to x axis from the left of the page
        frm.style.width = self.GetParameterValue("PluginWidth") + "px";
        frm.style.height = self.GetParameterValue("PluginHeight") + "px";

        //bool parameter
        var loopCondtion= Number( self.GetParameterValue("loop"))
        var MoreCondtion= Number( self.GetParameterValue("MoreThanTwo"))
        var FullScreenCondtion = Number( self.GetParameterValue("FullScreen"))
        var autoPlayCondtion = Number( self.GetParameterValue("autoPlay"))
       //vars
        var links = self.GetParameterValue("links")
        var width = self.GetParameterValue("width")
        var Height = self.GetParameterValue("Height")
        console.log(links);
        console.log(autoPlayCondtion);
        console.log(MoreCondtion);
        console.log(loopCondtion);
     
        if (width.length>0) {
            frm.setAttribute("width",width)
        }
        else{
         frm.setAttribute("width","420")
        }
        if (Height.length>0) {
         frm.setAttribute("height",Height)
       }
       else{
       frm.setAttribute("height","345")
       }
       var first;
       var second;
       var linksArr= links.split("**")
       var idArr=[];
       //to get links sperated
       for (const id of linksArr) {
       var temp = id.split("watch?v=")
         idArr.push(temp[1])
       }
       console.log(idArr);
       // to get ids 
       for (let index = 0; index < idArr.length; index++) {
         const element = idArr[index];
         if (index==0)
         {
             first=element
         }
         if (index==1) {
             second=element
         }
         else{
             second=second+","+element
         }
       }
       
       var src="https://www.youtube.com/embed/"
       
       if (MoreCondtion) {
        src = src +first+"?playlist="+second
        console.log("2");
        
       }
       else{
          src=src+first
       
       }
       if(MoreCondtion){
         src  = src +"&loop=1"
         console.log("loop");
         
       }
       else if(loopCondtion&&!MoreCondtion) {
          src="https://www.youtube.com/embed/"+first+"?playlist="+first
         src  = src +"&loop=1"
       }
       if(autoPlayCondtion&&MoreCondtion){
         src  = src +"&autoplay=1"
         console.log("auto");
         
       }
       else{
         src  = src +"?autoplay=1"
       }
       
       
    
    
    
    
    
    
    
    frm.setAttribute("src",src)
    if (FullScreenCondtion) {
        frm.setAttribute("allowfullscreen","true")
    }
    
        
     WorkSpace.appendChild(frm);






        
     };

    return youTube;
}());