import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import {
  createCourse,
  createExercise,
  uploadExerciseImg,
} from "../../services/courses/services";
import { onSubmitCourseData, onSubmitExerciseData } from "./form";
import "./styles.css";

const AddCourseComponent = (props: any) => {
  const { courses } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(null);

  const createCourseLocalFn = (courseInfo: any) => {
    const addCourse = async () => {
      try {
        dispatch(pushLoading());
        await createCourse(courseInfo);
        navigate("/");
      } catch (e: any) {
        console.log(e);
      } finally {
        dispatch(popLoading());
      }
    };
    addCourse();
  };

  const createExerciseLocalFn = (exerciseInfo: any) => {
    const addCourse = async () => {
      try {
        dispatch(pushLoading());
        const imgUr = await uploadExerciseImg(imgUrl);
        if (imgUr) {
          await createExercise({
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
    addCourse();
  };

  const initialCourseValues = {
    courseName: "",
    courseDescription: "",
    difficulty: "",
  };

  const initialExerciseValues = {
    exerciseName: "",
    exerciseDescription: "",
    exerciseImageUrl: "",
    course_id: String(courses[0]?.course_id),
  };

  const courseDataFormik = useFormik({
    initialValues: initialCourseValues,
    onSubmit: (values) => onSubmitCourseData(values, createCourseLocalFn),
  });

  const exerciseDataFormik = useFormik({
    initialValues: initialExerciseValues,
    onSubmit: (values) => onSubmitExerciseData(values, createExerciseLocalFn),
  });

  console.log(exerciseDataFormik.values);

  return (
    <div className="add-course-component-container">
      <div className="add-course-general-form">
        <p className="add-course-title">Create new course</p>
        <div className="add-course-input-container">
          <label htmlFor="">Course name</label>
          <input
            type="text"
            name="courseName"
            onChange={courseDataFormik.handleChange}
            onBlur={courseDataFormik.handleBlur}
            value={courseDataFormik.values.courseName}
          />
        </div>
        <div className="add-course-input-container">
          <label htmlFor="">Description</label>
          <textarea
            name="courseDescription"
            onChange={courseDataFormik.handleChange}
            onBlur={courseDataFormik.handleBlur}
            value={courseDataFormik.values.courseDescription}
            rows={6}
          />
        </div>
        <div className="add-course-input-container">
          <label htmlFor="">
            Difficulty -- Easy: 1 -- Medium: 2 -- Hard: 3
          </label>
          <input
            type="number"
            name="difficulty"
            onChange={courseDataFormik.handleChange}
            onBlur={courseDataFormik.handleBlur}
            value={courseDataFormik.values.difficulty}
          />
        </div>
        <button
          type="submit"
          className="add-course-save-btn"
          onClick={() => courseDataFormik.handleSubmit()}
        >
          Upload course
        </button>
      </div>
      <br />
      <hr className="add-course-section-divider" />
      <br />
      <div className="add-exercise-form-container">
        <p className="add-exercise-title">Create new exercise</p>
        <div className="add-single-exercise-container">
          <br />
          <div className="add-course-input-container">
            <label htmlFor="">Exercise name</label>
            <input
              type="text"
              name="exerciseName"
              onChange={exerciseDataFormik.handleChange}
              onBlur={exerciseDataFormik.handleBlur}
              value={exerciseDataFormik.values.exerciseName}
            />
          </div>
          <div className="add-course-input-container">
            <label htmlFor="">Description</label>
            <textarea
              name="exerciseDescription"
              onChange={exerciseDataFormik.handleChange}
              onBlur={exerciseDataFormik.handleBlur}
              value={exerciseDataFormik.values.exerciseDescription}
              rows={6}
            />
          </div>
          <div className="add-course-input-container">
            <label htmlFor="">Image</label>
            <input
              type="file"
              onChange={(e: any) => setImgUrl(e.target.files[0])}
            />
            {/* <input
              name="exerciseImageUrl"
              type="text"
              onChange={exerciseDataFormik.handleChange}
              onBlur={exerciseDataFormik.handleBlur}
              value={exerciseDataFormik.values.exerciseImageUrl}
            /> */}
          </div>
          <div className="add-course-input-container">
            <label htmlFor="course_id">Course</label>
            <select
              name="course_id"
              onChange={exerciseDataFormik.handleChange}
              onBlur={exerciseDataFormik.handleBlur}
              value={exerciseDataFormik.values.course_id}
            >
              {courses.map((course: any) => (
                <option
                  key={`course-option-${course.course_id}`}
                  value={course.course_id}
                >
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="manage-course-save-btn-container">
            <button
              type="submit"
              className="manage-course-save-btn"
              onClick={() => exerciseDataFormik.handleSubmit()}
            >
              Upload exercise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourseComponent;
