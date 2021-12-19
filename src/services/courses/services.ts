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
