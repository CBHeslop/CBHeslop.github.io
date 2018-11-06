/* get id from html document */
var t = parseInt(document.getElementById('temp').innerHTML);
var s = parseInt(document.getElementById('windSpeed').innerHTML);

/* formula for wind chill */
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16); 

/* rounding two places */
f = f.toFixed(2);

/* return to html document */
document.getElementById('windChill').innerHTML = f;

