import "./styles.css";

const CourseViewComponent = (props: any) => {
  const { name, description, difficulty, exercises } = props.course;

  return (
    <div className="course-view-component-container">
      <p className="course-name">{name}</p>
      <p className="course-difficulty-container">
        <span className="course-difficulty">Difficulty: </span>
        {difficulty}
      </p>
      <p className="course-description">{description}</p>
      <div className="exercises-title-container">
        <p className="exercises-title">Exercises</p>
        <hr />
      </div>
      {exercises.map((exercise: any) => (
        <div key={`ex-${exercise.exercise_id}`} className="exercise-container">
          <p className="exercise-name">{exercise.name}</p>
          <p className="exercise-description">{exercise.description}</p>
          {/* <p>{exercise.image_url}</p> */}
          <div className="exercise-image">
            <img src={exercise.image_url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseViewComponent;
