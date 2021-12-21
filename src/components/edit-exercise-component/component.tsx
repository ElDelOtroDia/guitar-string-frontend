import "./styles.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import {
  deleteExercise,
  patchExerciseInfo,
  uploadExerciseImg,
} from "../../services/courses/services";
import { onSubmitExerciseData } from "./form";
import { useState } from "react";

const EditExerciseComponent = (props: any) => {
  const { name, description, image_url, exercise_id } = props.exercise;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(null);

  const onSaveExerciseData = (exercise_id: any, exerciseInfo: any) => {
    console.log("Saving exercise");
    const updateExercise = async () => {
      try {
        dispatch(pushLoading());
        const imgUr = await uploadExerciseImg(imgUrl);
        if (imgUr) {
          await patchExerciseInfo(exercise_id, {
            ...exerciseInfo,
            image_url: imgUr,
          });
          navigate("/");
        }
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

  const deleteExerciseAsync = async () => {
    try {
      dispatch(pushLoading());
      await deleteExercise(exercise_id);

      navigate("/");
    } catch (e: any) {
      console.log(e);
    } finally {
      dispatch(popLoading());
    }
  };

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
        <label htmlFor="">Image</label>
        <input
          type="file"
          onChange={(e: any) => setImgUrl(e.target.files[0])}
        />
        {/* <input
          name="exerciseImg"
          type="text"
          onChange={exerciseDataFormik.handleChange}
          onBlur={exerciseDataFormik.handleBlur}
          value={exerciseDataFormik.values.exerciseImg}
        /> */}
      </div>
      <div className="manage-course-save-btn-container">
        <button
          type="submit"
          className="manage-course-save-btn"
          onClick={() => exerciseDataFormik.handleSubmit()}
        >
          Save changes
        </button>
        <button
          type="submit"
          className="manage-exercise-delete-btn"
          onClick={() => deleteExerciseAsync()}
        >
          Delete exercise
        </button>
      </div>
    </div>
  );
};

export default EditExerciseComponent;
