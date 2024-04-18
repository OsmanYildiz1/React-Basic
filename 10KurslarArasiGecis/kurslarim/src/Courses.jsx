import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index]; // sıfırıncı indexteki kurs bilgilerini çek

  console.log(index);
  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1; // son elemanı return ettik
    }
    if (index > courses.length - 1) {
      // index son elemandaysa başa dön
      return 0;
    }
    return index;
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex); // 0 indextekinden 4.ye geçmek için yeni bir fonksiyon
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length); // 0 ile 5 arasında değer
    if (randomNumber === index) {
      // aynı sayı denk gelirse bir sonrakine ata
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  return (
    <div className="courseMainDiv">
      <div className="courseTitleAndButton">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>
          Rastgele Kurs Ata!
        </button>
      </div>

      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
