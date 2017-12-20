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
var inactive = 0;
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

// Sum for desertion
var totalStudentsAqp = aqp2.length + aqp1.length;
var totalStudentsCdmx = cdmx1.length + cdmx2.length;
var totalStudentsLim = lim1.length + lim2.length + lim3.length;
var totalStudentsScl =  scl1.length + scl2.length + scl3.length;

var totalActiveAqp = aqpTwo + aqpOne;
var totalDesertionAqp = totalStudentsAqp - totalActiveAqp;

var totalActiveCdmx = cdmxOne + cdmxTwo; 
var totalDesertionCdmx = totalStudentsCdmx - totalActiveCdmx;

var totalActiveLim = limOne + limTwo + limThree; 
var totalDesertionLim = totalStudentsLim - totalActiveLim;


var totalActiveScl = sclOne + sclTwo + sclThree; 
var totalDesertionScl = totalStudentsScl - totalActiveScl;



// Drawing graph

var ctx = document.getElementById("arequipa").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Presentes 2016-2", "Desertaron 2016-2", "Presentes 2017-1", "Desertaron 2017-1"],
        datasets: [{
            label: '# Alumnas AQP',
            data: [aqpTwo, (aqp2.length)-aqpTwo, aqpOne, (aqp2.length)-aqpOne],
            backgroundColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
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
        labels: ["Presentes 2017-1", "Desertaron 2017-1", "Presentes 2017-2", "Desertaron 2017-2"],
        datasets: [{
            label: '# Alumnas CDMX',
            data: [cdmxOne, (cdmx1.length)-cdmxOne, cdmxTwo, (cdmx2.length)-cdmxTwo],
            backgroundColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
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
        labels: ["P 2016-2", "D 2016-2", "P 2017-1", "D 2017-1", "P 2017-2", "D 2017-2"],
        datasets: [{
            label: '# Alumnas Lima',
            data: [limOne, (lim1.length)-limOne, limTwo, (lim2.length)-limTwo, limThree, (lim3.length)-limThree],
            backgroundColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
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
        labels: ["P 2016-2", "D 2016-2", "P 2017-1", "D 2017-1", "P 2017-2", "D 2017-2"],
        datasets: [{
            label: '# Alumnas Santiago de Chile',
            data: [sclOne, (scl1.length)-sclOne, sclTwo, (scl2.length)-sclTwo, sclThree, (scl3.length)-sclThree],
            backgroundColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
                'rgba(255, 206, 86, 1)',
                '#B9B9B9',
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


function crearContenedorPorcentajesAQP() {
  var p = document.createElement("p");
  var pSede = document.createElement("p");
  var porcentaje = (totalDesertionAqp * 100) / totalStudentsAqp;
  p.innerText = porcentaje.toFixed(2) + "%";
  pSede.innerText = 'Arequipa';

  var divContenedor = document.createElement("div");
  divContenedor.className = 'box';
  divContenedor.appendChild(pSede);
  divContenedor.appendChild(p);
  document.getElementById('desertion-table').appendChild(divContenedor);
}

function crearContenedorPorcentajesCDMX() {
  var p = document.createElement("p");
  var pSede = document.createElement("p");
  var porcentaje = (totalDesertionCdmx * 100) / totalStudentsCdmx;
  p.innerText = porcentaje.toFixed(2) + "%";
  pSede.innerText = 'CDMX';

  var divContenedor = document.createElement("div");
  divContenedor.className = 'box';
  divContenedor.appendChild(pSede);
  divContenedor.appendChild(p);
  document.getElementById('desertion-table').appendChild(divContenedor);
}

function crearContenedorPorcentajesLIM() {
  var p = document.createElement("p");
  var pSede = document.createElement("p");
  var porcentaje = (totalDesertionLim * 100) / totalStudentsLim;
  p.innerText = porcentaje.toFixed(2) + "%";
  pSede.innerText = 'Lima';

  var divContenedor = document.createElement("div");
  divContenedor.className = 'box';
  divContenedor.appendChild(pSede);
  divContenedor.appendChild(p);
  document.getElementById('desertion-table').appendChild(divContenedor);
}

function crearContenedorPorcentajesSCL() {
  var p = document.createElement("p");
  var pSede = document.createElement("p");
  var porcentaje = (totalDesertionScl * 100) / totalStudentsScl;
  p.innerText = porcentaje.toFixed(2) + "%";
  pSede.innerText = 'Santiago';

  var divContenedor = document.createElement("div");
  divContenedor.className = 'box';
  divContenedor.appendChild(pSede);
  divContenedor.appendChild(p);
  document.getElementById('desertion-table').appendChild(divContenedor);
}



crearContenedorPorcentajesAQP();
crearContenedorPorcentajesCDMX();
crearContenedorPorcentajesLIM();
crearContenedorPorcentajesSCL();






