function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

document.getElementById('date').textContent = new Date().toLocaleDateString();

document.addEventListener('DOMContentLoaded', function() {
  var myAudio = document.getElementById('myAudio');
  setTimeout(function(){
    myAudio.play();
  }, 5000);
});

function calculateGrade(score) {
    if (score >= 95) return {grade: 'A+', points: 4.0};
    else if (score >= 90) return {grade: 'A', points: 3.7};
    else if (score >= 85) return {grade: 'A-', points: 3.4};
    else if (score >= 80) return {grade: 'B+', points: 3.2};
    else if (score >= 75) return {grade: 'B', points: 3.0};
    else if (score >= 70) return {grade: 'B-', points: 2.8};
    else if (score >= 67) return {grade: 'C+', points: 2.6};
    else if (score >= 65) return {grade: 'C', points: 2.4};
    else if (score >= 62) return {grade: 'C-', points: 2.2};
    else if (score >= 60) return {grade: 'D+', points: 2};
    else if (score >= 55) return {grade: 'D', points: 1.5};
    else if (score >= 50) return {grade: 'D-', points: 1.0};
    else return {grade: 'F', points: 0.0};
}

document.addEventListener('DOMContentLoaded', function() {
    var scores = {english: 36.5, logicDesign: 14, programming: 15, physics: 16, statistics: 34, management: 39};
    Object.keys(scores).forEach(function(course) {
        var totalPoints = scores[course];
        var percent = (totalPoints / 40) * 100;
        var result = calculateGrade(percent);
        document.getElementById(course + '-grade').textContent = result.grade;
        document.getElementById(course + '-points').textContent = result.points;
    });
});

function changeYear() {
    var year = document.getElementById("academicYear").value;
    document.querySelectorAll('.course-details').forEach(function(element) {
        element.classList.add('hidden');
    });
    document.getElementById('term').style.display = 'block';
}

function changeTerm() {
    var year = document.getElementById("academicYear").value;
    var term = document.getElementById("term").value;
    var courseId = year + term;
    document.querySelectorAll('.course-details').forEach(function(element) {
        element.classList.add('hidden');
    });
    document.getElementById(courseId).classList.remove('hidden');
}

function changeYear() {
    console.log("Year changed to: " + document.getElementById('academicYear').value);
}

function changeTerm() {
    console.log("Term changed to: " + document.getElementById('term').value);
}
