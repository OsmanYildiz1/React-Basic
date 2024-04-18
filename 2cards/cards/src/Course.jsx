import React from "react";
//rafc
// export const Course = () => {
//   return <div>Course div</div>;
// };

//ffc
function Course({ image, title, description }) {
  // en kısa hali

  // const title = props.title;
  // const description = props.description;

  // const { title, description } = props; // 2. yöntem daha kısa hali.

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Kurslarım" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </>
  );
}

export default Course; // default kullandığımızda import ettiğimizde dosyada {} kullanmamız gerek yok
