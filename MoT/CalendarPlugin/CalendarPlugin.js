/*
    Plugin Icon: https://www.iconsdb.com/icons/preview/royal-azure-blue/calendar-7-xxl.png
*/
//Library CSS and JS Refs
var headTag = document.getElementsByTagName("head")[0];

// Adding Javascript to Head
// Core Javascript
var coreScriptTag = document.createElement("script");
coreScriptTag.src = "https://unpkg.com/@fullcalendar/core@4.2.0/main.js";
headTag.appendChild(coreScriptTag);

// daygrid depends on core which loads in more time causing ref error Fuck this shit!
setTimeout(function (params) {
    // Day Grid Javascript
    var daygridScriptTag = document.createElement("script");
    daygridScriptTag.src = "https://unpkg.com/@fullcalendar/daygrid@4.2.0/main.js";
    headTag.appendChild(daygridScriptTag);            
}, 1000);


// Adding CSS to Head
// Core CSS
var coreCssTag = document.createElement("link");
coreCssTag.rel = "stylesheet";
coreCssTag.href = "https://unpkg.com/@fullcalendar/core@4.2.0/main.css";
headTag.appendChild(coreCssTag);
// Day Grid CSS
var daygridCssTag = document.createElement("link");
daygridCssTag.rel = "stylesheet";
daygridCssTag.href = "https://unpkg.com/@fullcalendar/daygrid@4.2.0/main.css";
headTag.appendChild(daygridCssTag);


var DayGridPlugin = (function () {

    var DayGridPlugin = function () {
        var self = this;
        MOT_Plugin.call(this); // call Plugin Constructor
        self.PluginType = "DayGridPlugin";
        self.SetParameterValue("PluginName", self.PluginType);
        self.SetParameterValue("PluginWidth", 350);
        self.SetParameterValue("PluginHeight", 350);
        delete self.Parameters.DataSource;
        delete self.Parameters.Query;

    };
    //do GridPlugin extend MOT_Plugin
    extend(DayGridPlugin, MOT_Plugin);

    DayGridPlugin.prototype.Draw = function (WorkSpace) {
        var self = this;
        self.GetPlugin(WorkSpace);
        
        //Library CSS and JS Refs
        var headTag = document.getElementsByTagName("head")[0];

        // Adding Javascript to Head
        // Core Javascript
        var coreScriptTag = document.createElement("script");
        coreScriptTag.src = "https://unpkg.com/@fullcalendar/core@4.2.0/main.js";
        headTag.appendChild(coreScriptTag);
        
        // daygrid depends on core which loads in more time causing ref error Fuck this shit!
        setTimeout(function (params) {
            // Day Grid Javascript
            var daygridScriptTag = document.createElement("script");
            daygridScriptTag.src = "https://unpkg.com/@fullcalendar/daygrid@4.2.0/main.js";
            headTag.appendChild(daygridScriptTag);            
        }, 1000);


        // Adding CSS to Head
        // Core CSS
        var coreCssTag = document.createElement("link");
        coreCssTag.rel = "stylesheet";
        coreCssTag.href = "https://unpkg.com/@fullcalendar/core@4.2.0/main.css";
        headTag.appendChild(coreCssTag);
        // Day Grid CSS
        var daygridCssTag = document.createElement("link");
        daygridCssTag.rel = "stylesheet";
        daygridCssTag.href = "https://unpkg.com/@fullcalendar/daygrid@4.2.0/main.css";
        headTag.appendChild(daygridCssTag);

        //Initialize Calendar Element
        var calendarDIV = document.createElement("div");
        calendarDIV.id = "calendar-daygrid";
        // Add Calendar to workspace
        WorkSpace.appendChild(calendarDIV);
        // add css classes to WorkSpace div
        //self.addCssClasses(calendarDIV);
        
        /*
        document.addEventListener('DOMContentLoaded', function() {
            // Draw Calendar
            var calendarEl = document.getElementById('calendar-daygrid');
            console.log(calendarEl);
            var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'dayGrid' ],
                defaultView: 'dayGridMonth'
            });
            console.log(calendarEl);
            calendar.render();
            console.log(calendarEl);
        });
        */
        
        // This timeout is for waiting all head tags to load to avoid FullCalendar undefined error, Shitty!
        setTimeout(function (params) {
            // Draw Calendar
            var calendarEl = document.getElementById('calendar-daygrid');
            console.log(calendarEl);
            var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'dayGrid' ],
                defaultView: 'dayGridMonth'
            });
            console.log(calendarEl);
            calendar.render();
            console.log(calendarEl);
        }, 2000);
        
    };

    return DayGridPlugin;
}());