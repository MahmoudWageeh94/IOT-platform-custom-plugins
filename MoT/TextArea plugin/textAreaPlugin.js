var NewtextArea = (function () {
    var NewtextArea = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "NewtextArea";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 400);
        self.SetParameterValue("PluginHeight", "auto");
        delete self.Parameters.DataSource;
        delete self.Parameters.Query;
       
        
        self.Parameters.Value = self.addPluginParameters("Value", "input", "", "Text", "Show writen text");
        self.Parameters.TextAlign = self.addPluginParameters("TextAlign", "Select", ["left", "center", "right"], "Text alighnment ", "Select text alignment");
        self.Parameters.TextAlign.addProperty("SelectedValue", "left");
        self.Parameters.MaxLength = self.addPluginParameters("MaxLength", "input", "", "MaxLength", "The maxlength property specifies the maximum length (in characters) of a text area.");
        self.Parameters.FontSize = self.addPluginParameters("FontSize", "Select", ["14px", "17px", "20px", "22px", "24px", "26px", "28px"], "Font size", "Select font size");
        self.Parameters.FontSize.addProperty("SelectedValue", "14px");
        self.Parameters.FontColor = self.addPluginParameters("FontColor", "color", "#000000", "Font color", "Set font color");
        self.Parameters.BackgroundColor = self.addPluginParameters("BackgroundColor", "color", "#ffffff", "Background color", "Set background color");
        self.Parameters.FontFamily = self.addPluginParameters("FontFamily", "Select", ["select font", "Arial", "Courrier New", "Times New Roman"], "Font family", "Select font family");
        self.Parameters.FontFamily.addProperty("SelectedValue", "select font");
        self.Parameters.FontWeight = self.addPluginParameters("FontWeight", "Select", ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "Font Weight", "The fontWeight property sets or returns how thick or thin characters in a text should be displayed.");
        self.Parameters.FontWeight.addProperty("SelectedValue", "normal");
        self.Parameters.FontStyle = self.addPluginParameters("FontStyle", "Select", ["normal", "italic", "oblique", "initial"], "Font Style", "The fontStyle property sets or returns whether the style of the font is normal, italic or oblique.");
        self.Parameters.FontStyle.addProperty("SelectedValue", "normal");
        self.Parameters.DisableEditing = self.addPluginParameters("DisableEditing", "True/False", 0, "Disable editing", "enable/disable editing in textArea");
        self.Parameters.OnChange = self.addPluginParameters("OnChange", "event", "", "on change event", "This event will fire when the text Area value will be changed ");
        self.Parameters.OnBlur = self.addPluginParameters("OnBlur", "event", "", "on Blur event", "This event will fire when the text area value will be changed ");
        self.Parameters.BorderRounded = self.addPluginParameters("BorderRounded", "True/False", 0, "Border Rounded", "Whether Border is Rounded");
        self.Parameters.TextDirection = self.addPluginParameters("TextDirection", "Select", ["ltr", "rtl"], "Text Direction", "Text direction property that which language you write");
        self.Parameters.TextDirection.addProperty("SelectedValue", "ltr");

    };
    //do GridPlugin extend MOT_Plugin
    extend(NewtextArea, MOT_Plugin);

    NewtextArea.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);
        var container = document.createElement('section');
        container.style.top = self.GetParameterValue("LocationY") + "px"; //To relocate the plugin in a different position according to y axis from the top of the page
        container.style.left = self.GetParameterValue("LocationX") + "px"; //To relocate the plugin in a different position according to x axis from the left of the page
        container.style.width = self.GetParameterValue("PluginWidth") + "px";
        container.style.height = self.GetParameterValue("PluginHeight") + "px";
        ////////////////////////////
        var settings = document.createElement('div');
        settings.style.width = '100%';
        settings.style.marginBottom = '0px';
        settings.style.background = '#ddd';
        settings.style.boxSizing = 'border-box';
        settings.style.padding = '10px';
        settings.style.background = '#ddd';

        var font = document.createElement('span');
            font.textContent = 'Font-Size';
            font.style.padding = '5px';
        var fontSize = document.createElement('select');
        var option1 = document.createElement("option");
        option1.setAttribute("value", "12");
        var text1 = document.createTextNode("12px");
        option1.appendChild(text1);
        var option2 = document.createElement("option");
        option2.setAttribute("value", "14");
        var text2 = document.createTextNode("14px");
        option2.appendChild(text2);
        var option3 = document.createElement("option");
        option3.setAttribute("value", "16");
        var text3 = document.createTextNode("16px");
        option3.appendChild(text3);
        var option4 = document.createElement("option");
        option4.setAttribute("value", "18");
        var text4 = document.createTextNode("18px");
        option4.appendChild(text4);
        var option5 = document.createElement("option");
        option5.setAttribute("value", "20");
        var text5 = document.createTextNode("20px");
        option5.appendChild(text5);
        var option6 = document.createElement("option");
        option6.setAttribute("value", "22");
        var text6 = document.createTextNode("22px");
        option6.appendChild(text6);
        var option7 = document.createElement("option");
        option7.setAttribute("value", "24");
        var text7 = document.createTextNode("24px");
        option7.appendChild(text7);
        fontSize.appendChild(option1); 
        fontSize.appendChild(option2);
        fontSize.appendChild(option3);
        fontSize.appendChild(option4);
        fontSize.appendChild(option5);
        fontSize.appendChild(option6);
        fontSize.appendChild(option7); 
        settings.appendChild(font);
        settings.appendChild(fontSize);
        //////////////////////////////////////////
        var weight = document.createElement('span');
        weight.textContent = 'Font-Weight';
        weight.style.padding = '5px';
        var fontWeight = document.createElement('select');
        var normalWeight = document.createElement("option");
        normalWeight.setAttribute("value", "normal");
        normalWeight.textContent = "Normal";
        var boldWeight = document.createElement("option");
        boldWeight.setAttribute("value", "bold");
        boldWeight.textContent = "Bold";
        var weight200 = document.createElement("option");
        weight200.setAttribute("value", "200");
        weight200.textContent = "200px";
        var weight400 = document.createElement("option");
        weight400.setAttribute("value", "400");
        weight400.textContent = '400px';
        var weight600 = document.createElement("option");
        weight600.setAttribute("value", "600");
        weight600.textContent = '600px';
        var weight800 = document.createElement("option");
        weight800.setAttribute("value", "800");
        weight800.textContent = '800px';
        fontWeight.appendChild(normalWeight); 
        fontWeight.appendChild(boldWeight);
        fontWeight.appendChild(weight200);
        fontWeight.appendChild(weight400);
        fontWeight.appendChild(weight600);
        fontWeight.appendChild(weight800); 
        settings.appendChild(weight);
        settings.appendChild(fontWeight);
        /////////////////////////////////////
        var family = document.createElement('span');
        family.textContent = 'Font-Family';
        family.style.padding = '5px';
        var fontFamily = document.createElement('select');
        var arialFamily = document.createElement("option");
        arialFamily.setAttribute("value", "Arial");
        arialFamily.textContent = "Arial";
        var tahomaFamily = document.createElement("option");
        tahomaFamily.setAttribute("value", "Tahoma");
        tahomaFamily.textContent = "Tahoma";
        var romanFamily = document.createElement("option");
        romanFamily.setAttribute("value", "Times New Roman");
        romanFamily.textContent = "Times New Roman";

        fontFamily.appendChild(arialFamily); 
        fontFamily.appendChild(tahomaFamily);
        fontFamily.appendChild(romanFamily);
        settings.appendChild(family);
        settings.appendChild(fontFamily);
        /////////////////////////////////////
        var style = document.createElement('span');
            style.textContent = 'Font-Style';
            style.style.padding = '5px';
        var fontStyle = document.createElement('select');
        var normal = document.createElement("option");
        normal.setAttribute("value", "normal");
        var normalText = document.createTextNode("Normal");
        normal.appendChild(normalText);
        var bold = document.createElement("option");
        bold.setAttribute("value", "bold");
        var boldText = document.createTextNode("Bold");
        bold.appendChild(boldText);
        var italic = document.createElement("option");
        italic.setAttribute("value", "italic");
        var italicText = document.createTextNode("Italic");
        italic.appendChild(italicText);
        fontStyle.appendChild(normal); 
        fontStyle.appendChild(bold);
        fontStyle.appendChild(italic);
        settings.appendChild(style);
        settings.appendChild(fontStyle);
        /////////////////////////////////////////////////////////
        var direction = document.createElement('span');
        direction.textContent = 'Text-Direction';
        direction.style.padding = '5px';
        var textDirection = document.createElement('select');
        var rtl = document.createElement("option");
        rtl.setAttribute("value", "rtl");
        rtl.textContent = "Right-to-left";
        var ltr = document.createElement("option");
        ltr.setAttribute("value", "ltr");
        ltr.textContent = "Left-to-right";
        textDirection.appendChild(ltr);
        textDirection.appendChild(rtl);
        settings.appendChild(direction);
        settings.appendChild(textDirection);
        /////////////////////////////////////////////////////////
        var color = document.createElement('span');
            color.textContent = 'Font-Color';
            color.style.padding = '5px';
        var fontColor = document.createElement("input");
            fontColor.setAttribute("type", "color");
            fontColor.style.border = 'none';
            fontColor.style.cursor = 'pointer';
        settings.appendChild(color);
        settings.appendChild(fontColor);
        ///////////////////////////////////////////////////
        var background = document.createElement('span');
            background.textContent = 'Background';
            background.style.padding = '5px';
        var backgroundColor = document.createElement("input");
            backgroundColor.setAttribute("type", "color");
            backgroundColor.style.border = 'none';
            backgroundColor.style.cursor = 'pointer';
        settings.appendChild(background);
        settings.appendChild(backgroundColor);
/////////////////////////////////////////////////////////////
    var textArea = document.createElement('textArea');
        textArea.style.width = "100%";
        textArea.style.height = "100%";
        textArea.style.border = '2px solid #ccc';
        textArea.style.resize = 'none';
        textArea.setAttribute('placeholder', 'Enter your text....');
        textDirection.addEventListener('change', (e) => {
            textArea.style.direction = textDirection.value;
            self.Parameters.TextDirection.SelectedValue = textDirection.value;
            if (textDirection.value == 'rtl') {
              textArea.setAttribute('placeholder', "قم بإدخال النص...");
            }else{
              textArea.setAttribute('placeholder', 'Enter your text....');
            }
          });
        fontColor.addEventListener('change', (e) => {
        textArea.style.color = fontColor.value;
        self.Parameters.FontColor.SelectedValue = fontColor.value;
        });
        backgroundColor.addEventListener('change', (e) => {
        textArea.style.background = backgroundColor.value;
        self.Parameters.BackgroundColor.SelectedValue = backgroundColor.value;
        });
        fontSize.addEventListener('change', (e) => {
        textArea.style.fontSize = fontSize.value + 'px';
        self.Parameters.FontSize.SelectedValue = fontSize.value;
        });
        fontStyle.addEventListener('change', (e) => {
        textArea.style.fontStyle = fontStyle.value;
        self.Parameters.FontStyle.SelectedValue = fontStyle.value;
        });
        fontWeight.addEventListener('change', (e) => {
        textArea.style.fontWeight = fontWeight.value || fontWeight.value + 'px';
        self.Parameters.FontWeight.SelectedValue = fontWeight.value || fontWeight.value + 'px';
        });
        fontFamily.addEventListener('change', (e) => {
        textArea.style.fontFamily = fontFamily.value;
        self.Parameters.FontFamily.SelectedValue = fontFamily.value;
        });

        textArea.style.textAlign = this.GetParameterByName("TextAlign").SelectedValue;
        textArea.style.fontSize = this.GetParameterByName("FontSize").SelectedValue;
        textArea.style.fontFamily = this.GetParameterByName("FontFamily").SelectedValue;
        textArea.style.fontStyle = this.GetParameterByName("FontStyle").SelectedValue;
        textArea.style.fontWeight = this.GetParameterByName("FontWeight").SelectedValue;
        textArea.style.height = this.GetParameterValue("PluginHeight") + "px";
        textArea.style.width = this.GetParameterValue("PluginWidth") + "px";
        textArea.style.backgroundColor = this.GetParameterValue("BackgroundColor");
        textArea.style.overflow = "auto";
        textArea.style.color = this.GetParameterValue("FontColor");
        textArea.style.direction = this.GetParameterValue("TextDirection").SelectedValue;
        if (self.GetParameterValue("BorderRounded") == 1) {
            settings.style.borderTopLeftRadius = "25px";
            settings.style.borderTopRightRadius = "25px";
            textArea.style.borderBottomLeftRadius = "25px";
            textArea.style.borderBottomRightRadius = "25px";
        }
        if (this.GetParameterValue("DisableEditing") == 1) {


            textArea.setAttribute("disabled", "disabled");

        } else {
            textArea.removeAttribute("disabled");
        }
        var TextValue = this.GetParameterValue("Value")
        this.SetParameterValue("Value", TextValue)
        if (TextValue && TextValue != " ") {
            textArea.value = TextValue
        }
        /////////////////////////////////////////////////////
        
        container.appendChild(settings);
        container.appendChild(textArea);
        WorkSpace.appendChild(container);
        

        // add css classes to WorkSpace div
    self.addCssClasses(container);
   
    };

    return NewtextArea;
}());

