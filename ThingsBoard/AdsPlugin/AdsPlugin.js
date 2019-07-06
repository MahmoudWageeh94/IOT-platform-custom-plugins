self.onInit = function() {
    if (window.location.href.search("publicId") != -1) {
        // parameters of the code url
            var url = self.ctx.settings.script.split("?")
            var baseUrl = url[0];
            var tempArray = url[1].split("&");
            var tid = tempArray[0].split('=')[1]
            var type = tempArray[1].split('=')[1]
            var side = self.ctx.settings.PositionHorizontal
            var size = tempArray[3].split('=')[1]
            var position = self.ctx.settings.PositionVertical
            var finalSrc = baseUrl + "?" + "tid=" + tid + "&" + "type=" + type + "&" + "side=" + side + "&" + "size=" + size + "&" + "position=" + position
            // add script to web page
            var script = document.createElement("script")
            script.src = finalSrc
            script["data-cfasync"] = "false"
            document.getElementsByTagName("body")[0].appendChild(script)
    }
}