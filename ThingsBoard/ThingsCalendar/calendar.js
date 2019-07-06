self.onInit = function() {
    //Library CSS and JS Refs
    var headTag = document.getElementsByTagName("head")[
        0];

    // Adding Javascript to Head
    // Core Javascript
    var coreScriptTag = document.createElement("script");
    coreScriptTag.src =
        "https://unpkg.com/@fullcalendar/core@4.2.0/main.js";
    headTag.appendChild(coreScriptTag);

    // daygrid depends on core which loads in more time causing ref error Fuck this shit!
    setTimeout(function(params) {
        // Day Grid Javascript
        var daygridScriptTag = document.createElement(
            "script");
        daygridScriptTag.src =
            "https://unpkg.com/@fullcalendar/daygrid@4.2.0/main.js";
        headTag.appendChild(daygridScriptTag);
    }, 1000);


    // Adding CSS to Head
    // Core CSS
    var coreCssTag = document.createElement("link");
    coreCssTag.rel = "stylesheet";
    coreCssTag.href =
        "https://unpkg.com/@fullcalendar/core@4.2.0/main.css";
    headTag.appendChild(coreCssTag);
    // Day Grid CSS
    var daygridCssTag = document.createElement("link");
    daygridCssTag.rel = "stylesheet";
    daygridCssTag.href =
        "https://unpkg.com/@fullcalendar/daygrid@4.2.0/main.css";
    headTag.appendChild(daygridCssTag);


    setTimeout(function(params) {
        // Draw Calendar
        var calendarEl = document.getElementById(
            'daygrid-calendar');
        console.log(calendarEl);
        var calendar = new FullCalendar.Calendar(
            calendarEl, {
                plugins: ['dayGrid'],
                defaultView: 'dayGridMonth'
            });
        console.log(calendarEl);
        calendar.render();
        console.log(calendarEl);
    }, 2000);
}

self.onDestroy = function() {}