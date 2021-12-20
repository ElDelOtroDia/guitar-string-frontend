export const onSubmitGeneralData = (
  values: any,
  onSaveCourse: (courseInfo: any) => void
) => {
  const courseInfo = {
    name: values.courseName,
    description: values.courseDescription,
    difficulty_id: values.difficulty,
  };
  onSaveCourse(courseInfo);
};
