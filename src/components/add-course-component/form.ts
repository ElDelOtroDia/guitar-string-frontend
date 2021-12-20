export const onSubmitCourseData = (
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

export const onSubmitExerciseData = (
  values: any,
  onSaveExercise: (courseInfo: any) => void
) => {
  const courseInfo = {
    name: values.exerciseName,
    description: values.exerciseDescription,
    image_url: values.exerciseImageUrl || null,
    audio_url: null,
    course_id: Number(values.course_id),
  };
  console.log(courseInfo);

  onSaveExercise(courseInfo);
};
