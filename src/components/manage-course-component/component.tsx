import "./styles.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import {
  deleteCourse,
  patchGeneralCourseInfo,
} from "../../services/courses/services";
import { onSubmitGeneralData } from "./form";
import EditExerciseComponent from "../edit-exercise-component/component";

const ManageCourseComponent = (props: any) => {
  const { course_id, name, description, exercises, difficulty_id } =
    props.course;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSaveGeneralCourse = (courseInfo: any) => {
    console.log("Saving form");
    const updateCourse = async () => {
      try {
        dispatch(pushLoading());
        await patchGeneralCourseInfo(course_id, courseInfo);
        navigate("/");
      } catch (e: any) {
        console.log(e);
      } finally {
        dispatch(popLoading());
      }
    };
    updateCourse();
  };

  const generalDataFormik = useFormik({
    initialValues: {
      courseName: name,
      courseDescription: description,
      difficulty: difficulty_id,
    },
    onSubmit: (values) => onSubmitGeneralData(values, onSaveGeneralCourse),
  });

  const deleteCourseAsync = async () => {
    try {
      dispatch(pushLoading());
      await deleteCourse(course_id);

      navigate("/");
    } catch (e: any) {
      console.log(e);
    } finally {
      dispatch(popLoading());
    }
  };

  return (
    <div className="manage-course-component">
      <div className="manage-course-header">
        <div></div>
        <p className="manage-course-name">{name}</p>
        <div className="manage-course-delete-btn-container">
          <RiDeleteBinFill
            className="manage-course-delete-btn"
            onClick={() => deleteCourseAsync()}
          />
        </div>
      </div>
      <div className="manage-course-general-form">
        <div className="manage-course-input-container">
          <label htmlFor="">Course name</label>
          <input
            type="text"
            name="courseName"
            onChange={generalDataFormik.handleChange}
            onBlur={generalDataFormik.handleBlur}
            value={generalDataFormik.values.courseName}
          />
        </div>
        <div className="manage-course-input-container">
          <label htmlFor="">Description</label>
          <textarea
            name="courseDescription"
            onChange={generalDataFormik.handleChange}
            onBlur={generalDataFormik.handleBlur}
            value={generalDataFormik.values.courseDescription}
            rows={6}
          />
        </div>
        <div className="manage-course-input-container">
          <label htmlFor="">
            Difficulty -- Easy: 1 -- Medium: 2 -- Hard: 3
          </label>
          <input
            type="number"
            name="difficulty"
            onChange={generalDataFormik.handleChange}
            onBlur={generalDataFormik.handleBlur}
            value={generalDataFormik.values.difficulty}
          />
        </div>
        <button
          type="submit"
          className="manage-course-save-btn"
          onClick={() => generalDataFormik.handleSubmit()}
        >
          Save
        </button>
      </div>
      <br />
      <hr className="manage-course-section-divider" />
      <br />

      <div className="manage-course-exercises-form">
        <p className="manage-exercises-title">Exercises</p>
        {exercises?.map((exercise: any, index: any) => (
          <span key={index} className="exercise-component-container">
            <EditExerciseComponent exercise={exercise} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ManageCourseComponent;
