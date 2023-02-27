const urlParams = new URLSearchParams(window.location.search);
const data = atob(urlParams.get('g')).split('$');

let grade = {
	firstName: data[0],
	subject: data[1],
	desc: data[2],
    date: data[10],
    color: data[11],

	// Status
	isOutOf20: data[3] == "true",
    isBonus: data[4] == "true",
    isOptional: data[5] == "true",
    isSignificant: data[6] == "true",
    significantReason: data[7],
    isSignificantZero: data[8] == "true",
    isSignificantAverage: data[9] == "true",

    // Grade
    value: data[12],
    outOf: data[13],
    coefficient: data[14],
    average: data[15],
    max: data[16],
    min: data[17]
}

const modifiableAttributes = ['firstName', 'subject', 'desc']
for (const key in grade) {
    if(modifiableAttributes.includes(key)) {
        grade[key] = grade[key].split('-').map(Number).map(x => String.fromCharCode(x)).join('');
    }
}

// set color
document.getElementById('courseCardTop').style.backgroundColor = grade.color;

// set theme color
document.querySelector('meta[name=theme-color]').setAttribute('content', grade.color);

// set first name
document.getElementById('person').innerText = grade.firstName;

// set grade name
document.getElementById('subjectName').innerText = grade.subject;

// set description
document.getElementById('description').innerText = grade.desc;

// set studentMark
let mark = grade.value;
if (grade.isSignificant) {
    mark += '/' + grade.outOf;
} else {
    mark = grade.significantReason
}
document.getElementById('studentMark').innerText = mark;

// set classAverage
let average = grade.average;
if (grade.isSignificantAverage) {
    average += '/' + grade.outOf;
} else {
    average = grade.significantReason
}
document.getElementById('classAverage').innerText = grade.average;

// set timeout to remove loading screen
setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
}, 1000);