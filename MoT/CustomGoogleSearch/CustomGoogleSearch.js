/*global MOT_Plugin,console,extend*/
var CustomGoogleSearchPlugin = (function () {

    var CustomGoogleSearchPlugin = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "CustomGoogleSearchPlugin";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 350);
        self.SetParameterValue("PluginHeight", 40);
        delete self.Parameters.DataSource;
        delete self.Parameters.Query;

        self.Parameters.SearchId = self.addPluginParameters("SearchId", "input", "", "SearchId", "write your custom search engine id. you can get one from https://cse.google.com/all");
        self.Parameters.ResultsUrl = self.addPluginParameters("ResultsUrl", "input", "", "ResultsUrl", "write the url of your website. http://www.masterofthings.com/ for example");
    };
    //do GridPlugin extend MOT_Plugin
    extend(CustomGoogleSearchPlugin, MOT_Plugin);
    CustomGoogleSearchPlugin.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);

        var script = document.createElement("script")
        script.src = "https://cse.google.com/cse.js?cx=" + self.GetParameterValue("SearchId")
        document.getElementsByTagName("body")[0].appendChild(script)

        var div = document.createElement("div");
        div.style.top = self.GetParameterValue("LocationY") + "px";
        div.style.left = self.GetParameterValue("LocationX") + "px";
        div.style.width = self.GetParameterValue("PluginWidth") + "px";
        div.style.height = self.GetParameterValue("PluginHeight") + "px";
        div["data-resultsUrl"] = self.GetParameterValue("ResultsUrl")
        div["data-newWindow"] = "true"
        div["data-queryParameterName"] = "search"
        div.style.backgroundColor = "grey"

        WorkSpace.appendChild(div);
        div.className = "gcse-searchbox-only";

        // add css classes to WorkSpace div
        self.addCssClasses(div)
    };
    return CustomGoogleSearchPlugin;
}());