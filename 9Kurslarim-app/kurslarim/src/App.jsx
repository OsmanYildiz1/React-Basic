import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => {
      return course.id !== id;
    });
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true); // data çekme başladığında yüklenme true olmalı
    try {
      const response = await axios.get("http://localhost:3000/courses"); //db.jsondan veriyi çektik.
      setCourses(response.data); // veriyi courses değişkenine atadık
      setLoading(false);
    } catch (error) {
      // hata ve bekleme sürecini yönetmek için try catch kullandık
      setLoading(false);
    }
  };

  useEffect(() => {
    // sayfa yüklendiğinde data çekilmeye başlanacak
    fetchCourses();
  }, []);
  return (
    <>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            {courses.length === 0 ? (
              <div className="refreshDiv">
                <h2>Kursların hepsini sildin!</h2>
                <button
                  className="cardDeleteBtn"
                  onClick={() => {
                    fetchCourses();
                  }}
                >
                  Yenile
                </button>
              </div>
            ) : (
              <Courses courses={courses} removeCourse={deleteCourse} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
