import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
import "./Course.css";

const courseMap = {
  Angular, // key - value değerleri birbirine eşitse böyle kullanılabilir
  Bootstrap,
  Ccsharp,
  Kompleweb,
};
function Course({ courseName }) {
  // console.log(courseName);
  // console.log(Angular);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
