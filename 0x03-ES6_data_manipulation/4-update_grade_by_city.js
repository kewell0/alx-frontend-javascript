export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const defaultGrade = { grade: 'N/A' };

  return students.filter((student) => student.location === city)
    .map((s) => ({
      ...s,
      grade: (newGrades
        .filter((grade) => grade.studentId === s.id)
        .pop() || defaultGrade).grade,
    }));
}
