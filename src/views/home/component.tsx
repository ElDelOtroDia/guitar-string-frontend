import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CourseViewComponent from "../../components/course-view-component/component";
import "./styles.css";

const Home: FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const courses1 = [
    {
      course_id: 3,
      name: "Ligature",
      description: "dsaflkjahslkjdfas",
      difficulty: "Baja",
      exercises: [
        {
          exercise_id: 2,
          name: "Ejercicio blafas",
          description: "adjhsfjksad",
          image_url: "sdakjflaksd",
          audio_url: "asdkjlhjfadsk",
          course_id: 3,
        },
        {
          exercise_id: 3,
          name: "jyrdhjnf",
          description: "adjhsfjksadsfgjsfdg",
          image_url: "sdakjflaksddfgdff",
          audio_url: "sfdhwrth",
          course_id: 3,
        },
      ],
    },
    {
      course_id: 4,
      name: "Hammer-On",
      description: "adsfasd",
      difficulty: "Baja",
      exercises: [
        {
          exercise_id: 4,
          name: "hammer light",
          description: "sadfasdfasd",
          image_url: "345wergfwer",
          audio_url: "sdfgsdf5465",
          course_id: 4,
        },
      ],
    },
    {
      course_id: 5,
      name: "curso 1sdkfljg",
      description: "dslfkasdjasdkgfjhasldkfj",
      difficulty: "kfjasdhfklajs",
      exercises: [
        {
          exercise_id: 5,
          name: "jkeahlke",
          description: "sdkjfhgds;sld",
          image_url: "dsaklfjhgskjldfh",
          audio_url: "asdfkjhgsdlkj",
          course_id: 5,
        },
      ],
    },
  ];

  const [courses, setCourses] = useState(courses1);

  const courseTips = [
    "Always warm your fingers a bit by doing some push-ups, opening and closing your fists, etc.",
    "Make sure you have your guitar in tune before starting a session.",
    "Use the metronome whenever you can.",
    "Avoid any kind of distraction during your practice sessions.",
    "Practice for at least 15 minutes per session.",
  ];

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const getCourses = async () => {
  //     try {
  //       dispatch(pushLoading());
  //       const receivedCourses = await fetchCourses();
  //       setCourses(receivedCourses);
  //     } catch (e: any) {
  //       console.log(e);
  //     } finally {
  //       dispatch(popLoading());
  //     }
  //   };

  //   if (courses === null) {
  //     getCourses();
  //   }
  // }, [dispatch]);

  return (
    <div className="home-container">
      <div className="courses-container">
        <div className="courses-list">
          <p className="courses-title">Courses</p>
          <div
            className={`course-card-container ${
              activeIndex === -1 ? "active-course-card" : ""
            }`}
            onClick={() => (activeIndex !== -1 ? setActiveIndex(-1) : null)}
          >
            Welcome
          </div>
          {courses.map((course, index) => (
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
          {activeIndex === -1 ? (
            <div className="welcome-view-container">
              <p className="welcome-title">Welcome!</p>
              <p>
                Hello! Please make yourself comfortable and enjoy the most
                useful guitar exercises to develop your skills to the fullest
                and in a short time.{" "}
              </p>
              <p className="welcome-tips">
                <span className="welcome-tips-title">
                  Tips for getting the most out of these exercises:
                </span>
                <br />
                {courseTips.map((tip) => (
                  <span key={tip}>
                    <span className="orange-point-list">•</span> {tip} <br />
                  </span>
                ))}
                <br />
              </p>
            </div>
          ) : (
            <CourseViewComponent course={courses[activeIndex]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
