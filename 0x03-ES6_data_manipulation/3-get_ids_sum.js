export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  return students.reduce(
    (s1, s2) => s1.id || s1 + s2.id,
    0,
  );
}
