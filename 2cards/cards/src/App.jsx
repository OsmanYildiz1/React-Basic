import "bulma/css/bulma.css";
import { useState } from "react";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg"; // resim import etmek
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/* burada app.jsx parent course.jsx childdir */}
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarım</p>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Angular}
                  title="Angular"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Totam exercitationem repellat fuga dolor deleniti rem fugit quo error laboriosam.
                Nobis earum sed illo est repellat vero alias vitae, eligendi libero."
                />
              </div>

              <div className="column">
                <Course
                  image={Bootstrap}
                  title="Bootstrap 5"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Totam exercitationem repellat fuga dolor deleniti rem fugit quo error laboriosam.
                Nobis earum sed illo est repellat vero alias vitae, eligendi libero."
                />
              </div>

              <div className="column">
                <Course
                  image={Csharp}
                  title="Komple Web"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Totam exercitationem repellat fuga dolor deleniti rem fugit quo error laboriosam.
                Nobis earum sed illo est repellat vero alias vitae, eligendi libero."
                />
              </div>

              <div className="column">
                <Course
                  image={Kompleweb}
                  title="Frontend"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Totam exercitationem repellat fuga dolor deleniti rem fugit quo error laboriosam.
                Nobis earum sed illo est repellat vero alias vitae, eligendi libero."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
