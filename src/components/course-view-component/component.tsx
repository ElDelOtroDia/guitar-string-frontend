const CourseViewComponent = (props: any) => {
  const { name, description, difficulty, exercises } = props.course;
  console.log(props);

  return (
    <div className="course-view-component-container">
      {/* <p>{name}</p>
      <p>{description}</p>
      <p>{difficulty}</p> */}
      {exercises.map((exercise: any) => (
        <p key={`ex-${exercise.exercise_id}`}>{exercise.name}</p>
      ))}
    </div>
  );
};

export default CourseViewComponent;
