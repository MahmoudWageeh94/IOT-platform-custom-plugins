self.onInit = function() {
    
    var script = document.createElement("script")
    script.src = "https://cse.google.com/cse.js?cx="+self.ctx.settings.SearchId
    document.getElementsByTagName("body")[0].appendChild(script)
}