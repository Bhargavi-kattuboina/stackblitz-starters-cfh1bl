const students = [
  {
    name: "John",
    chemistryMarks: 80,
    biologyMarks: 90,
    dob: "03-07-1998"
  },
  {
    name: "Alice",
    chemistryMarks: 75,
    biologyMarks: 85,
    dob: "12-01-1999"
  },
  {
    name: "Bob",
    chemistryMarks: 80,
    biologyMarks: 85,
    dob: "03-07-1998"
  },
  // ... additional student objects
];

students.sort((a, b) => {
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1; // a comes before b
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1; // b comes before a
  } else {
    if (a.biologyMarks > b.biologyMarks) {
      return -1; // a comes before b
    } else if (a.biologyMarks < b.biologyMarks) {
      return 1; // b comes before a
    } else {
      return 0; // maintain the original order
    }
  }
});

console.log(students);
