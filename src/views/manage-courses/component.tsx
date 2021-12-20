import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Course } from "../../models/courses/types";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { fetchCourses } from "../../services/courses/services";
import "./styles.css";
import EditCourseComponent from "../../components/edit-course-component/component";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddCourseComponent from "../../components/add-course-component/component";

const ManageCourses: FC = () => {
  const [activeIndex, setActiveIndex] = useState("0");

  const [courses, setCourses] = useState<Course[] | null>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    const getCourses = async () => {
      try {
        dispatch(pushLoading());
        const receivedCourses = await fetchCourses();
        setCourses(receivedCourses);
      } catch (e: any) {
        console.log(e);
      } finally {
        dispatch(popLoading());
      }
    };

    if (courses === null) {
      getCourses();
    }
  }, [dispatch, courses]);

  return (
    <div className="manage-courses-container">
      <div className="courses-container">
        <div className="courses-list">
          <button
            className="add-course-container"
            onClick={() =>
              activeIndex !== "addCourseExercise"
                ? setActiveIndex("addCourseExercise")
                : null
            }
          >
            <p>Add course or exercise</p>
            <IoIosAddCircleOutline className="add-icon" />
          </button>
          <p className="courses-title">Courses</p>
          {courses?.map((course, index) => (
            <div
              key={`course-view-${course.course_id}`}
              className={`course-card-container ${
                activeIndex === String(index) ? "active-course-card" : ""
              }`}
              onClick={() =>
                activeIndex !== String(index)
                  ? setActiveIndex(String(index))
                  : null
              }
            >
              <p>{course.name}</p>
            </div>
          ))}
        </div>
        <div className="courses-view">
          {courses?.length && activeIndex === "addCourseExercise" ? (
            <AddCourseComponent courses={courses} />
          ) : null}
          {courses?.length && Number(activeIndex) >= 0 ? (
            <EditCourseComponent course={courses[+activeIndex]} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
