export const calculateAverage = (subjects) => {
  const scores = Object.values(subjects);
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

export const getGrade = (average) => {
  if (average >= 90) return 'A+';
  if (average >= 80) return 'A';
  if (average >= 70) return 'B';
  if (average >= 60) return 'C';
  if (average >= 50) return 'D';
  return 'F';
};

export const getStatus = (average) => {
  return average >= 50 ? 'Pass' : 'Fail';
};