/*
    Plugin Icon: https://www.iconsdb.com/icons/preview/royal-blue/loop-xxl.png
*/

var MarqueePlugin = (function () {
    var MarqueePlugin = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "MarqueePlugin";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 100);
        self.SetParameterValue("PluginHeight", 30);
        delete self.Parameters.DataSource;
        delete self.Parameters.Query;
        // Marquee Paragraph
        self.Parameters.MarqueeText = self.addPluginParameters("MarqueeText", "input", "Marquee", "MarqueeText ", "The text animating in Marquee bar!");
        // Marquee's Paragraph Speed
        self.Parameters.TextSpeed = self.addPluginParameters("TextSpeed", "input", "10s", "Paragraph Speed", "Paragraph speed in Marquee body");
        // Marquee Font Size
        self.Parameters.FontSize = self.addPluginParameters("FontSize", "input", 14, "Font Size", "The fontSize property sets the font size of the text in pixels.");
        // Marquee's Paragraph Speed
        self.Parameters.TopPadding = self.addPluginParameters("TopPadding", "input", 20, "Paragraph Top Padding", "Paragraph top padding");
        // Marquee Font Family
        self.Parameters.FontFamily = self.addPluginParameters("FontFamily", "Select", ["Arial", "Courrier New", "Times New Roman"], "Font Family", "The fontFamily property sets a list of font-family names for text");
        self.Parameters.FontFamily.addProperty("SelectedValue", "Arial");
        // Marquee Font Style
        self.Parameters.FontStyle = self.addPluginParameters("FontStyle", "Select", ["normal", "italic", "oblique", "initial"], "Font Style", "The fontStyle property sets or returns whether the style of the font is normal, italic or oblique.");
        self.Parameters.FontStyle.addProperty("SelectedValue", "normal");
        // Marquee Font Wight
        self.Parameters.FontWeight = self.addPluginParameters("FontWeight", "Select", ["normal", "bold", "bolder", "lighter"], "Font Weight", "The fontWeight property sets or returns how thick or thin characters in a text should be displayed.");
        self.Parameters.FontWeight.addProperty("SelectedValue", "normal");
        // Marquee Font Color
        self.Parameters.FontColor = self.addPluginParameters("FontColor", "color", "", "Font Color", "Font color");
        // Marquee Background Color
        self.Parameters.BackgroundColor = self.addPluginParameters("BackgroundColor", "color", "", "Background Color", "Background Color");
    };
    //do GridPlugin extend MOT_Plugin
    extend(MarqueePlugin, MOT_Plugin);

    MarqueePlugin.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);

        // Create Marquee Container (DIV)
        var MarqueeContainer = document.createElement("div");

        // Adding Style to Marquee Container
        MarqueeContainer.style.top = self.GetParameterValue("LocationY") + "px";        //To relocate the plugin in a different position according to y axis from the top of the page
        MarqueeContainer.style.left = self.GetParameterValue("LocationX") + "px";       //To relocate the plugin in a different position according to x axis from the left of the page
        MarqueeContainer.style.width = self.GetParameterValue("PluginWidth") + "px";
        MarqueeContainer.style.height = self.GetParameterValue("PluginHeight") + "px";
        MarqueeContainer.style.backgroundColor = self.GetParameterValue("BackgroundColor");
        MarqueeContainer.style.whiteSpace = "nowrap";
        MarqueeContainer.style.overflow = "hidden";
        MarqueeContainer.style.boxSizing = "border-box";
        
        // Create Marquee Text (P)
        var MarqueeText = document.createTextNode(self.GetParameterValue("MarqueeText"));
        var MarqueeParagraph = document.createElement("p");
        MarqueeParagraph.appendChild(MarqueeText);

        // Adding Style to Marquee Paragraph
        MarqueeParagraph.style.display = "inline-block";
        MarqueeParagraph.style.paddingLeft = "100%";
        MarqueeParagraph.style.paddingTop = self.GetParameterValue("TopPadding") + "px";
        MarqueeParagraph.style.animation = "marquee " + self.GetParameterValue("TextSpeed") + " linear infinite";
        MarqueeParagraph.style.fontFamily = self.GetParameterByName("FontFamily").SelectedValue;
        MarqueeParagraph.style.fontStyle = self.GetParameterByName("FontStyle").SelectedValue;
        MarqueeParagraph.style.fontWeight = self.GetParameterByName("FontWeight").SelectedValue;
        MarqueeParagraph.style.fontSize = self.GetParameterValue("FontSize") + "px";
        MarqueeParagraph.style.color = self.GetParameterValue("FontColor");

        // Insert Marquee Text in its Container
        MarqueeContainer.appendChild(MarqueeParagraph);

        // Adding Animation Style
        var animation = document.createElement("style");
        var animationStyling = document.createTextNode("@keyframes marquee {0%   { transform: translate(0, 0); }    100% { transform: translate(-100%, 0); }}");
        animation.appendChild(animationStyling);
        document.getElementsByTagName("head")[0].appendChild(animation);

        // Insert Marquee in WorkSpace
        WorkSpace.appendChild(MarqueeContainer);

        // add css classes to WorkSpace div
        self.addCssClasses(MarqueeContainer);
    };

    return MarqueePlugin;
}());