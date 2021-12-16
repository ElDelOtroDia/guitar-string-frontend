import { FC, useState } from "react";
import "./styles.css";

const Home: FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const courses = [
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
  return (
    <div className="home-container">
      <div className="courses-container">
        <div className="courses-list">
          <p className="courses-title">Courses</p>
          <div
            className={`course-card-container ${
              activeIndex === -1 ? "active-course-card" : ""
            }`}
            onClick={() => setActiveIndex(-1)}
          >
            Welcome
          </div>
          {courses.map((course, index) => (
            <div
              key={course.course_id}
              className={`course-card-container ${
                activeIndex === index ? "active-course-card" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <p>{course.name}</p>
            </div>
          ))}
        </div>
        <div className="courses-view">b</div>
      </div>
    </div>
  );
};

export default Home;
