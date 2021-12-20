import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Course } from "../../models/courses/types";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { fetchCourses } from "../../services/courses/services";
import "./styles.css";
import ManageCourseComponent from "../../components/manage-course-component/component";

const ManageCourses: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [courses, setCourses] = useState<Course[] | null>(null);
  console.log(courses);

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
          <p className="courses-title">Courses</p>
          {courses?.map((course, index) => (
            <div
              key={`course-view-${course.course_id}`}
              className={`course-card-container ${
                activeIndex === index ? "active-course-card" : ""
              }`}
              onClick={() =>
                activeIndex !== index ? setActiveIndex(index) : null
              }
            >
              <p>{course.name}</p>
            </div>
          ))}
        </div>
        <div className="courses-view">
          {courses?.length ? (
            <ManageCourseComponent course={courses[activeIndex]} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
