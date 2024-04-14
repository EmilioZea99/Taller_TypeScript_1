import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
var avgSeasons = document.getElementById("avgSeasons");
avgSeasons.innerHTML = "".concat(getAvgSeasons(dataSeries));
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.number, "</td>\n                           <td><a class=\"btn\" href=\"#\" role=\"button\" id=\"btn-").concat(c.name, "\">").concat(c.name, "</a></td>\n\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>\n                           \n                           ");
        seriesTbody.appendChild(trElement);
    });
}
;
function getAvgSeasons(series) {
    var sum = 0;
    var cont = series.length;
    series.forEach(function (serie) { return sum = sum + serie.seasons; });
    console.log("Valor sum: " + sum);
    console.log("Valor cont: " + cont);
    var avg = sum / cont;
    return avg;
}
