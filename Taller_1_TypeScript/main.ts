import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
const avgSeasons: HTMLElement = document.getElementById("avgSeasons")!;


avgSeasons.innerHTML = `${getAvgSeasons(dataSeries)}`
renderSeriesInTable(dataSeries)

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.number}</td>
                           <td><a class="btn" href="#" role="button" id="btn-${c.name}">${c.name}</a></td>

                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>
                           
                           `
                           
    seriesTbody.appendChild(trElement);
    })};

  function getAvgSeasons(series:Serie[]){
    let sum:number=0;
    let cont:number=series.length;
    series.forEach((serie)=>sum=sum+serie.seasons);
    console.log("Valor sum: "+sum)
    console.log("Valor cont: "+cont)
    let avg:number=sum/cont
    return avg
  }
