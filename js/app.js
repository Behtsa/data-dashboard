// Defining students per generation and headquarters
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
var counter = 0; 

// Defining functions to iterate over the students
// so that we can select only the active ones.
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
	counter = 0;
	for(var i = 0; i < aqp1.length; i++) {
 		active = aqp1[i]['active'];
 		if(active === true) {
 			counter += 1;
 		}
 	}
 	return(counter);
}

function activeStudentsCDMX1() {
	counter = 0;
	for(var i = 0; i < cdmx1.length; i++) {
 		active = cdmx1[i]['active'];
 		if(active === true) {
 			counter += 1;
 		}
 	}
 	return(counter);
}

function activeStudentsCDMX2() {
	counter = 0;
	for(var i = 0; i < cdmx2.length; i++) {
 		active = cdmx2[i]['active'];
 		if(active === true) {
 			counter += 1;
 		}
 	}
 	return(counter);
}

function activeStudentsLIM1() {
	counter = 0;
    for(var i = 0; i < lim1.length; i++) {
        active = lim1[i]['active'];
        if(active === true) {
            counter += 1;
        }
    }
    return(counter);
}

function activeStudentsLIM2() {
	counter = 0;
    for(var i = 0; i < lim2.length; i++) {
        active = lim2[i]['active'];
        if(active === true) {
            counter += 1;
        }
    }
    return(counter);
}

function activeStudentsLIM3() {
	counter = 0;
    for(var i = 0; i < lim3.length; i++) {
        active = lim3[i]['active'];
        if(active === true) {
            counter += 1;
        }
    }
    return(counter);
}

function activeStudentsSCL1() {
	counter = 0;
    for(var i = 0; i < scl1.length; i++) {
        active = scl1[i]['active'];
        if(active === true) {
            counter += 1;
        }
    }
    return(counter);
}

function activeStudentsSCL2() {
	counter = 0;
    for(var i = 0; i < scl2.length; i++) {
        active = scl2[i]['active'];
        if(active === true) {
            counter += 1;
        }
    }
    return(counter);
}

function activeStudentsSCL3() {
	counter = 0;
    for(var i = 0; i < scl3.length; i++) {
        active = scl3[i]['active'];
        if(active === true) {
            counter += 1;
        }
    }
    return(counter);
}

//Saving active counter in separated variables to use it on the 
// graph bar. 
var aqpTwo = activeStudentsAQP2();
var aqpOne = activeStudentsAQP1();
var cdmxOne = activeStudentsCDMX1();
var cdmxTwo = activeStudentsCDMX2();
var limOne = activeStudentsLIM1();
var limTwo = activeStudentsLIM2();
var limThree = activeStudentsLIM3();
var sclOne = activeStudentsSCL1();
var sclTwo = activeStudentsSCL2();
var sclThree = activeStudentsSCL3();

// Drawing graph

var ctx = document.getElementById("arequipa").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["AQP 2016-2", "AQP 2017-1"],
        datasets: [{
            label: '# Active Students',
            data: [aqpTwo, aqpOne],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
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
});


var ctx = document.getElementById("cdmx").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["CDMX 2017-1", "CDMX 2017-2"],
        datasets: [{
            label: '# Active Students',
            data: [cdmxOne, cdmxTwo],
            backgroundColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
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
});

var ctx = document.getElementById("lima").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["LIMA 2016-2", "LIMA 2017-1", " LIMA 2017-2"],
        datasets: [{
            label: '# Active Students',
            data: [limOne, limTwo, limThree],
            backgroundColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
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
});

var ctx = document.getElementById("santiago").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["SCL 2016-2", "SCL 2017-1", " SCL 2017-2"],
        datasets: [{
            label: '# Active Students',
            data: [sclOne, sclTwo, sclThree],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
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
});

var cities = Object.keys(data);
//console.log(cities)
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















