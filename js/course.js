const urlParams = new URLSearchParams(window.location.search);
const data = atob(urlParams.get('c')).split('$');

let course = {
    firstName: data[0],
    subject: data[1],
    teacher: data[2],
    room: data[3],
    start: data[4],
    end: data[5],
    color: data[6],
    status: data[7],
    memo: data[8] == 'none' ? null : data[8]
};

console.log(course);

// set color
document.getElementById('courseCardTop').style.backgroundColor = course.color;

// set theme color
document.querySelector('meta[name=theme-color]').setAttribute('content', course.color);

// set first name
document.getElementById('person').innerText = course.firstName;

// set course name
document.getElementById('courseName').innerText = course.subject;

// set teacher name
document.getElementById('teacherName').innerText = course.teacher;

// set room name
document.getElementById('roomName').innerText = course.room;

// set start and end time
document.getElementById('startTime').innerText = course.start + ' - ' + course.end;

// set length of course
// calculate length of course
const start = course.start.split(':');
const end = course.end.split(':');
const length = (parseInt(end[0]) - parseInt(start[0])) * 60 + (parseInt(end[1]) - parseInt(start[1]));

// make a string in hours and minutes
const hours = Math.floor(length / 60);
const minutes = length % 60;
const lengthString = hours + ' h ' + minutes + ' min';

document.getElementById('length').innerText = lengthString;

// set status
if (course.status.toString() == "null") {
    course.status = 'Le cours se déroule normalement';
}
document.getElementById('status').innerText = course.status;

// set timeout to remove loading screen
setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
}, 1000);