/* get id from html document */
var temp = (document.getElementById('temp').innerHTML);
var windSpeed = (document.getElementById('windSpeed').innerHTML);

var t = parseInt(temp);
var s = parseInt(windSpeed);

/* formula for wind chill */
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16); 

/* rounding two places */
f = f.toFixed(2);

/* return to html document */
document.getElementById('windChill').innerHTML = f;

