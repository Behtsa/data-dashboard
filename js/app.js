var aqp2 = data['AQP']['2016-2']['students'];
var aqp1 = data['AQP']['2017-1']['students'];
var counter = 0;

function activeStudentsAQP2() {
	for(var i = 0; i < aqp2.length; i++) {
 		active = aqp2[i]['active'];
 		if(active === true) {
 			counter += 1;
 		}
 	}
 	return(counter);
}

function activeStudentsAQP1() {
	for(var i = 0; i < aqp1.length; i++) {
 		active = aqp1[i]['active'];
 		if(active === true) {
 			counter += 1;
 		}
 	}
 	return(counter);
}


var aqpTwo = activeStudentsAQP2();
var aqpOne = activeStudentsAQP1();

var cities = Object.keys(data);
console.log(cities)
var body = document.getElementsByTagName('div');
for(i = 0; i < cities.length; i++) {
	var button = document.createElement('button');
	button.innerHTML = cities[i];
	button.onclick = getGenByCity;
	body[0].appendChild(button);
}

function getGenByCity(event) {
  var city = event.srcElement.innerHTML;
  var gen = Object.keys(data[city]);
  console.log(gen);
}















