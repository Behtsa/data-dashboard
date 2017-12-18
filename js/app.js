// Graficas estaticas en la landing page
// Inicializamos variable activo
var active;
// Inicializamos varible contador
var counter = 0;
var counterArray = [];
var aqp2 = data['AQP']['2016-2']['students'];
var aqp1 = data['AQP']['2017-1']['students'];
var cdmx1 = data['CDMX']['2017-1']['students'];
var cdmx2 = data['CDMX']['2017-2']['students'];
var lim1 = data['LIM']['2016-2']['students'];
var lim2 = data['LIM']['2017-1']['students'];
var lim3 = data['LIM']['2017-2']['students'];
var scl1 = data['SCL']['2016-2']['students'];
var scl2 = data['SCL']['2017-1']['students'];
var scl3 = data['SCL']['2017-2']['students'];

var generationArray = [aqp2, aqp1, cdmx1, cdmx2, lim1, lim2, lim3, scl1, scl2, scl3];


function activeStudents() {
 	for(var i = 0; i < generationArray.length; i++) {
 		for(var j = 0; j <generationArray[i].length; j++)
 			active = generationArray[i][j]['active'];
 			if(active === true) {
 			counter += 1;
 		}
 		counterArray.push(counter);
 	}
 	console.log(counterArray);
 }

 activeStudents();

// var finalCounter = activeStudents();


// Puedes hacer uso de la base de datos a través de la variable `data`
//Llamamos a la funcion

// Pintar grafica

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
	type: 'bar',
 	data: {
 		labels: ["AQP 2016-2", "AQP 2016-2", "AQP 2016-2"],
        datasets: [{
             label: '# of Students',
             data: [
             	finalCounter,
             	finalCounter,
             	finalCounter,
             	],
             backgroundColor: [
                 'rgb(255, 99, 132)',
                 'rgb(54, 162, 235)',
                 'rgb(255, 206, 86)',
             ],
             borderColor: [
                 'rgb(255,99,132)',
                 'rgb(54, 162, 235)',
                 'rgb(255, 206, 86)',
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
 })


// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
var cities = Object.keys(data);
console.log(cities)
var body = document.getElementsByTagName('div');
for(i = 0; i < cities.length; i++) {
	var button = document.createElement('button');
	button.innerHTML = cities[i];
	button.onclick = getDataByCity;
	body[0].appendChild(button);
}

function getDataByCity(event) {
  var city = event.srcElement.innerHTML;
  var gen = Object.keys(data[city]);
  console.log(gen);
}























