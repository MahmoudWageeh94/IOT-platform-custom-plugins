/*global MOT_Plugin,console,extend*/
var popup = (function () {
    var popup = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "popup";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 64);
        self.SetParameterValue("PluginHeight", 64);
        
        self.Parameters.fontColor=self.addPluginParameters("fontColor","color","#00000","font color", "set your font color")
        self.Parameters.borderColor=self.addPluginParameters("borderColor","color","#00000","borderColor", "set your font color")
        self.Parameters.backGround=self.addPluginParameters("backGround","color","#ffffff","backGround", "set your font color")
        self.Parameters.FontFamily = self.addPluginParameters("FontFamily", "Select", ["Arial", "Courrier New", "Times New Roman"], "Font Family", "The fontFamily property sets a list of font-family names for text");
        self.Parameters.FontFamily.addProperty("SelectedValue", "Arial");
        self.Parameters.borderColor.addProperty("SelectedValue", "#0000");
        self.Parameters.backGround.addProperty("SelectedValue", "#ffffff");
        delete self.Parameters.Query;
        delete self.Parameters.HelpTip;
        delete self.Parameters.Version;
        delete self.Parameters.CssClasses;
        
        var back = "#ffffff"
        var border="#4286f4"
        var hexToRgb=function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
          }
       
        this.messages=function(title,body,){  
            var style = document.createElement("style")
            border =hexToRgb(window.borderColorMot)
            style.innerHTML= '.userPop{ position: absolute;top: -300px;left: 37.5%;width: 25%;min-height: 200px;background: '+"#ffffff"+';text-align: center;z-index: 15;padding: 20px; border: solid 3px rgba('+border.r+', '+border.g+', '+border.b+', 0.3);    border-radius: 10px;    -webkit-box-shadow: -1px 2px 12px 6px  rgba('+border.r+', '+border.g+', '+border.b+', 0.6);    -moz-box-shadow: -1px 2px 12px 6px  rgba('+border.r+', '+border.g+', '+border.b+', 0.6);    box-shadow: -1px 2px 12px 6px  rgba('+border.r+', '+border.g+', '+border.b+', 0.6);overflow:auto}'
            var head = document.getElementsByTagName("head")[0]
            head.appendChild(style)
            var popUp = document.createElement('div');
            popUp.classList.add('userPop');
            
            popUp.style.fontFamily=window.FontFamilyMor
            popUp.style.color=window.fontColorMot
            var header = document.createElement('h1');
            header.textContent = title
            var para = document.createElement('p');
            para.textContent = body;
            var button = document.createElement('button');
            button.textContent = "Ok";
            button.addEventListener('click',function(){
                document.body.removeChild(popUp);
            });
            popUp.appendChild(header);
            popUp.appendChild(para);
            popUp.appendChild(button);
            popUp.style.top = '15%';
            document.body.appendChild(popUp);
            console.log(self.GetParameterValue("fontColor"))

        };

    };
    //do GridPlugin extend MOT_Plugin
    extend(popup, MOT_Plugin);

    popup.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);
         var img = document.createElement("img")
        img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgKSURBVHhe7ZpbbBRVGMf75JMICKlB5OIDKjFqvOCrEV4UUMJFrgEURKOIAgoIffJBCIiJPjbRB0FRpBIjNCL3OwK97+yWUluCS1u37c7O0Atld7vH7ztzzsyZmbO7s8NAuglf8ku3s9985/v/58x9S+4Hi0zn5TGp7ppy4FpKrSMptZ6kEw2MkIGGKGTQJEwGdZHIPUIYE3tg/WBvtEfeL+sftVBN8VqSjNfoya6qioHOmklMeklJX3f9Y8l4dRQTMNESnk280IC0QRniOl6Q1ZDB8pkR2UxAuAmpeA253VWlmiaAK/uzimfCCxcv5gG0QRFeT6gr4lxfOgaH5bC6vF/LCLkJya7q/dyAnlzizSYLaUZoSMRqTo4z322GbEwOy2HrGjWzm4C7g2GAWtvr2udt4r00wAdH+Hp2cUZNL1jriLX89GGOK5jAjwm44Q0D4vX7/Ytn3wnCLQGsFh3cB3x9Vo/XL7Qnsxda1zIhqdbtpQZk9JpJsEC1Bi1goGzCRSGmuYUi1MhpRJbehP7sfYEBiYZopqv6UWoARkYPT0qrDRUpLaT7Ky4OYA0kw5iCbmS5BkJNlxG8TyRLr0KfKTXUCpRnOiNjmHR3ZLqbxsIKlc6ijdFmMu+XGHnx2//Ic193DCmwpzk/x8il1hZbz6DjYKavaSyT5j0y8dA4sVDjjWYy5RsQ/hUMOIR5CYxogl553xm4xmGSCgunAXN/ipFnt3cUBfP2xO7MAEN8+JBlQJg8v6ODPLO1vSh4AWaCuftqkcq8JqT0hhnphHIprYVvW6It8cjTX7QVFbxvrgO0tcH/2whRHmCyjUjpoZn2o6nEAPhuctmNoiKHnm1MuhG45fOJR4Oe2hgtKrJtVJwJTLoRcF7tkRvAlrHz5+TN0aLCvE7gOrIakAhfcotnBrCtj8XKWpJFhftCydT2JZNuREoPT3cbwFZi4vHqa8s/yaKCXzHyWQCf8SC41XUQxEjpkRlpPXIxrUXYWQDFcwOMS9DNzcmigkkLLjZdvU2KCdZ2cLGx6TYpJljbwcUGKBoUnzYOkKk/XCePl9VTpsFnXCbL9QtrO7j47MoACQoU/MjaKhu4TJbrF9Z2cLEetlBQTNhcS0o/uWxj4pZaaa5fWNuFBZ4i4Mi/I6WF2vjRnz+UWBe5FRgTNlWT0jUXbUz8vEaa6xcmqbCA09828dzPDcCnNWvDtwLj1e9bSOlHF2zgMlmuX5ikwgKEt5sGCFsfDfhYuRUYq+v7ySvftZDxGy5T8DMuk+X6hUkqLHIZsEbpLyqYpMJiMCHsAjYD6sjqUH9RwSQVFvQgmAhtpQdBhwEfNvQHxuw/Osi4tRfI6FWnKPgZl8ly/WJ/0wVa6IbFJ97hCnwCziR7jw/q+0hQjF97jox+94SN8evOSXP9IjMAZzfe46T1sFqwCe/X9ZGgGLXimBRZrl9yGcBu9owXo17jvdo+EhSj3j4iRZbrl3wGwCwwXox6jVW1vSQoRi0/LEWW6xf7mybBANz61ICI8WLUa6ys6SVB8fDSP6XIcv2S2wD64Md4Meo1VlT3kqAYubhSiizXL5YBKN5uAGz9aKavUXwxGnkCvqhI6wqeJmiy817gnaqewBi58IAUWa5f7FvfMABoBZ3lmV7hxWhGb3wSHFGzPQrjhZZf7gmMEfN/lyLL9UtSC02RPv9zBp4O2D5hGEBNoG7ZDFh2qScwRszdL0WW6xcmL3/A1u+zDOCzgBkgzIKlF28GxvDZ+6TIcv3C5OUPOB/2uA1w7wZLoGhQDJ+1V4os1y9MXv4Awb+5DJDMgsV/64Hx0Mw9UmS5fmHy8ge+OsbTgssExyxYdEEPjNKFFWTY9B9tlC6qkOb6hcnzFnhaANHlsDvAaUI+Cxac1wNj6q6rpHT+r2TYa7sopQv2kWm7m6W5fklqysuezgKywN/UgPhKaxYoZP45rajAnrF3qgE2Jl77w1/vt8LsVyKmAUvPJ8hbZ7WiYBn0ahrAZzPbvfGax5MJlgGGCdsbOshcKF4M7Ay1G+LZ1reObQxNyX0rbP+NkGHCv7Er4GyczDmTGNJgj51djdnFwzKYHe5b4Ux3Lez34QNpLdzvXMEwQSExKLy9vp0sOauS2acTQ4ol5+JkB/RmiHdPfVEPHNTdt8KDWuhoLtcoUBj3LQq9QDIukjh4B4YPIsyfoyPd1ZSddVEy61TCE5jL18MaWIv/nN9+m4uwPlhf+cRTjQnFfSuc0kI36cpBmWAaYZihddWRlec7yZsn1ZxgDuaaok3hwYiHvGimS7gV5gGFjngqQgsZecbA3ASZEXYzlGiEzDoZJ2+cUKXgd5jjFJ1dOMJ6RnL0Dbf6rYOJkP1WWAyiKuPTCeUQFB6wZoG8GAVz8piAWEYYZuyOXCMzjqtS8DtRNGKvV38Qj1Ws5aEXeOWVVkNl2cxAkmqIrL/YQaYfj9vAZfidbB1ez/fvfu9lkJjyoH1GuEW1xSJk7slu8vqxOAU/4zJnnq0G1BzyBtAZoMEMEHcNlxkGVdevkmWnY2T5mRj9LMsx12f1YB/O/7vfexHGvYLzmsF+bOBYZgiG5MVaR6wlOzZBDwPw/2E8hrH27n7AwEct4U6EJh1mIKI4Gc58u2hENiYS/ou1d/cDTik3czeDOBqnZohIhIo415eOwaGnucLe9NxJwJXUEW+NiYhivCCrIYPlJ5RK1t7dD9zfYEC4ZlBw/7OakDZ4N7DGhGNAH/RyYEhfH9yPIRslJf8D50b3wy1iGDEAAAAASUVORK5CYII="
     WorkSpace.appendChild(img);
 

        
     window.borderColorMot= self.GetParameterValue("borderColor")
     window.backGroundMot= self.GetParameterValue("backGround")
     window.fontColorMot= self.GetParameterValue("fontColor")
     window.FontFamilyMor= self.GetParameterByName("FontFamily").SelectedValue
      


        
     };

    return popup;
}());



