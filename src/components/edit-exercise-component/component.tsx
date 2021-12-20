import "./styles.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { patchExerciseInfo } from "../../services/courses/services";
import { onSubmitExerciseData } from "./form";

const EditExerciseComponent = (props: any) => {
  const { name, description, image_url, exercise_id } = props.exercise;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveExerciseData = (exercise_id: any, exerciseInfo: any) => {
    console.log("Saving exercise");
    const updateExercise = async () => {
      try {
        dispatch(pushLoading());
        await patchExerciseInfo(exercise_id, exerciseInfo);
        navigate("/");
      } catch (e: any) {
        console.log(e);
      } finally {
        dispatch(popLoading());
      }
    };
    updateExercise();
  };

  const exerciseDataFormik = useFormik({
    initialValues: {
      exerciseName: name,
      exerciseDescription: description,
      exerciseImg: image_url,
      exercise_id,
    },
    onSubmit: (values) => onSubmitExerciseData(values, onSaveExerciseData),
  });

  return (
    <div className="manage-single-course-container">
      <hr className="manage-course-section-divider" />
      <br />
      <div className="manage-course-input-container">
        <label htmlFor="">Exercise name</label>
        <input
          type="text"
          name="exerciseName"
          onChange={exerciseDataFormik.handleChange}
          onBlur={exerciseDataFormik.handleBlur}
          value={exerciseDataFormik.values.exerciseName}
        />
      </div>
      <div className="manage-course-input-container">
        <label htmlFor="">Description</label>
        <textarea
          name="exerciseDescription"
          onChange={exerciseDataFormik.handleChange}
          onBlur={exerciseDataFormik.handleBlur}
          value={exerciseDataFormik.values.exerciseDescription}
          rows={6}
        />
      </div>
      <div className="manage-course-input-container">
        <label htmlFor="">Image url</label>
        <input
          name="exerciseImg"
          type="text"
          onChange={exerciseDataFormik.handleChange}
          onBlur={exerciseDataFormik.handleBlur}
          value={exerciseDataFormik.values.exerciseImg}
        />
      </div>
      <div className="manage-course-save-btn-container">
        <button
          type="submit"
          className="manage-course-save-btn"
          onClick={() => exerciseDataFormik.handleSubmit()}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default EditExerciseComponent;
