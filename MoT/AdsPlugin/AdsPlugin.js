/*global MOT_Plugin,console,extend*/
var AdsPlugin = (function () {

    var AdsPlugin = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "AdsPlugin";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 50);
        self.SetParameterValue("PluginHeight", 50);
        delete self.Parameters.DataSource;
        delete self.Parameters.Query;

        self.Parameters.Script = self.addPluginParameters("Script", "input", "write script src here, please!", "Script Src", "paste code you copied from www.revenuehits.com");
        self.Parameters.PositionHorizontal = self.addPluginParameters("PositionHorizontal", "Select", ["left", "center", "right"], "Position Horizontal", "position your ad horizontally");
        self.Parameters.PositionHorizontal.addProperty("SelectedValue", "left");
        self.Parameters.PositionVertical = self.addPluginParameters("PositionVertical", "Select", ["top", "center", "bottom"], "Position Vertical", "position your ad vertically");
        self.Parameters.PositionVertical.addProperty("SelectedValue", "top");
    };
    //do GridPlugin extend MOT_Plugin
    extend(AdsPlugin, MOT_Plugin);
    AdsPlugin.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);

        // normal appearance
        var img = document.createElement("img");
        img.style.top = self.GetParameterValue("LocationY") + "px";
        img.style.left = self.GetParameterValue("LocationX") + "px";
        img.style.width = self.GetParameterValue("PluginWidth") + "px";
        img.style.height = self.GetParameterValue("PluginHeight") + "px";
        img.src = "https://raw.githubusercontent.com/KareemFathy1996/IOT-Project/master/MoT/AdsPlugin/tv.png"

        // behavior in user page
        if (window.location.href != "https://beta.masterofthings.com/mot.html#") {
            // parameters of the code url
            var url = self.GetParameterValue("Script").split("?")
            var baseUrl = url[0];
            var tempArray = url[1].split("&");
            var tid = tempArray[0].split('=')[1]
            var type = tempArray[1].split('=')[1]
            var side = self.GetParameterByName("PositionHorizontal").SelectedValue
            var size = tempArray[3].split('=')[1]
            var position = self.GetParameterByName("PositionVertical").SelectedValue
            var finalSrc = baseUrl + "?" + "tid=" + tid + "&" + "type=" + type + "&" + "side=" + side + "&" + "size=" + size + "&" + "position=" + position
            // add script to web page
            var script = document.createElement("script")
            script.src = finalSrc
            script["data-cfasync"] = "false"
            document.getElementsByTagName("body")[0].appendChild(script)
        }

        WorkSpace.appendChild(img);
        img.className = "img";

        // add css classes to WorkSpace div
        self.addCssClasses(img)
    };
    return AdsPlugin;
}());
