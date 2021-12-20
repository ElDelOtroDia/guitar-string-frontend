export const onSubmitExerciseData = (
  values: any,
  onSaveExercise: (exercise_id: any, exerciseInfo: any) => void
) => {
  const exerciseData = {
    name: values.exerciseName,
    description: values.exerciseDescription,
    image_url: values.exerciseImg,
  };

  onSaveExercise(values.exercise_id, exerciseData);
};
