import { authorizationFetch } from "../../utils/requests/auth";

export const fetchCourses = async (): Promise<[]> => {
  const response = await fetch("http://104.237.129.63:8016/api/course/", {
    method: "GET",
  });

  if (response.status === 200) {
    const courses: [] = await response.json();

    return courses;
  } else {
    throw new Error("Request error");
  }
};

export const patchGeneralCourseInfo = async (
  courseId: number,
  body: any
): Promise<any> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8016/api/course/${courseId}/`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  if (response.status === 200) {
    const course = await response.json();
    console.log(course);

    return course;
  } else {
    throw new Error("Request error");
  }
};

export const deleteCourse = async (courseId: number): Promise<any> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8016/api/course/${courseId}/`,
    {
      method: "DELETE",
    }
  );

  if (response.status === 200 || response.status === 204) {
    const course = await response.json();
    console.log(course);

    return course;
  } else {
    throw new Error("Request error");
  }
};

export const patchExerciseInfo = async (
  exerciseId: number,
  body: any
): Promise<any> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8016/api/exercise/${exerciseId}/`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  if (response.status === 200) {
    const exercise = await response.json();
    console.log(exercise);

    return exercise;
  } else {
    throw new Error("Request error");
  }
};
