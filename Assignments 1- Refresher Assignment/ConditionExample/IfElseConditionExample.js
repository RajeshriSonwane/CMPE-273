var projectMarks = 86;
var finalGrade;

if (projectMarks <= 100 && projectMarks >= 95) {
	finalGrade = 'A+';
} else if (projectMarks <= 94 && projectMarks >= 90) {
	finalGrade = 'A';
} else if (projectMarks <= 89 && projectMarks >= 85) {
	finalGrade = 'B+';
} else if (projectMarks <= 84 && projectMarks >= 80) {
	finalGrade = 'B';
} else if (projectMarks <= 79 && projectMarks >= 75) {
	finalGrade = 'C+';
} else if (projectMarks <= 74 && projectMarks >= 70) {
	finalGrade = 'C';
} else if (projectMarks <= 69 && projectMarks >= 65) {
	finalGrade = 'D+';
} else if (projectMarks <= 64 && projectMarks >= 60) {
	finalGrade = 'D';
} else {
	finalGrade = 'F';
}

console.log("Grade for "+projectMarks+" is "+ finalGrade);