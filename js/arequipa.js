// var cities = Object.keys(data);
// console.log(cities)
// var body = document.getElementsByClassName('b-menu');
// for(i = 0; i < cities.length; i++) {
// 	var button = document.createElement('button');
//  button.innerHTML = cities[i];
// 	button.onclick = getDataByCity;
// 	body[0].appendChild(button);
// }

// function getDataByCity(event) {
//   var city = event.srcElement.innerHTML;
//   var gen = Object.keys(data[city]);
//   console.log(gen);
// }

// document.getElementById("gen62").addEventListener("click", sprintsPerGeneration);


// function sprintsPerGeneration() {
// 	var generacion = document.getElementsByTagName("input").value;
// 	console.log(generacion);
// }
AmCharts.makeChart("superan",
	{
		"type": "pie",
		"angle": 12,
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
		"depth3D": 15,
		"innerRadius": "40%",
		"titleField": "category",
		"valueField": "column-1",
		"allLabels": [],
		"balloon": {},
		"legend": {
					"enabled": true,
					"align": "center",
					"markerType": "circle"
					},
		"titles": [],
		"dataProvider": [
						{
							"category": "superan meta",
							"column-1": "15"
						},
						{
							"category": "no superan meta",
							"column-1": "9"
						}
					]
	})


