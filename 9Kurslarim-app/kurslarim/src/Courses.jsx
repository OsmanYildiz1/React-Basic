import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          ); // objenin içindeki her şeyi geçtik. db.jsondaki tüm propertylere erişebiliriz ve prop olarak kullanabilirz.
        })}
      </div>
    </div>
  );
}

export default Courses;
